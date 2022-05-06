const mongoose = require("mongoose");

const booking = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  complains: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  hospital_name: {
    type: String,
    required: true,
  },
  hospital_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("booking", booking);
