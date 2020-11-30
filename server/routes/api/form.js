var mongoose = require("mongoose");
var router = require("express").Router();

var Form = mongoose.model("Form");


router.get("/",  function (req, res, next) {
  Form.find({})
    .then(function (form) {
      if (!form) {
        return res.sendStatus(401);
      }

      return res.json({ form: form });
    })
    .catch(next);
});
router.put("/:id", function (req, res, next) {
  Form.findById(req.params.id)
    .then(function (form) {
      if (!form) {
        return res.sendStatus(401);
      }

      if (req.body.content && typeof req.body.content !== "undefined") {
        form.content = req.body.content;
      }
      
      return form.save().then(function () {
        return res.json({ form: form });
      });
    })
    .catch(next);
});
router.post("/", function (req, res, next) {
  if (!req.body.content) {
    return res.status(422).json({ errors: { content: "can't be blank" } });
  }
var start = new Date();
start.setHours(0, 0, 0, 0);

var end = new Date();
end.setHours(23, 59, 59, 999);
    Promise.all([
      Form.count({ createdAt: { $gte: start, $lt: end } }).exec(),
    ]).then(function (results) {
      todaysFormsCount = results[0];
          console.log("Forms " + todaysFormsCount);

      new Form({
        name: "Forms " + todaysFormsCount,
        content: req.body.content,
      })
        .save()
        .then(function () {
          console.log("Forms " + todaysFormsCount);
          return res.json({ formsCount: todaysFormsCount });
        });
    });
});
module.exports = router;
