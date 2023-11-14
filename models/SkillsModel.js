const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: { type: String, required: true },
  level: { type: Number },
  logo: { type: String},
  link: {type: String}
});

module.exports = mongoose.model("Skills", skillsSchema);
