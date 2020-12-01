var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema(
  {
    name: { type: String },
    content: []
  },
  { timestamps: true }
);

mongoose.model("Form", FormSchema);
