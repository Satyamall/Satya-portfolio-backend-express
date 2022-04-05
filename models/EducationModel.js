const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  school: { type: String, required: true },
  city: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  collegelogo: { type: String, required: true},
});

module.exports = mongoose.model("Education", educationSchema);
