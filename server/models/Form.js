var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    content: []
  },
  { timestamps: true }
);

mongoose.model("Form", FormSchema);
