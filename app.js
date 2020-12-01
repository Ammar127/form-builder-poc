var express = require("express"),
  bodyParser = require("body-parser"),
 
  cors = require("cors"), 
  mongoose = require("mongoose");
var isProduction = process.env.NODE_ENV === "production";
const dbBaseUrl = "mongodb://localhost:/form";
// Create global app object
var app = express();
var allowlist = ["http://localhost:3000", "http://localhost:5000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { credentials: true, origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { credentials: true, origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));

// Normal express config defaults
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("method-override")());

 
 
if (isProduction) {
  mongoose.connect(dbBaseUrl);
} else {
  mongoose.connect(dbBaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.set("debug", true);
}

require("./server/models/Form");

app.use(require("./server/routes"));
//serve files of build statically on server
// app.use("/", express.static(path.join(__dirname, "dist/payload")));
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "dist/payload", "index.html"));
// });



app.use(function (err, req, res, next) {
  console.error(err.stack);

  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// finally, let's start our server...
var server = app.listen(process.env.PORT || 5000, function () {
  console.log("Listening on port " + server.address().port);
});


