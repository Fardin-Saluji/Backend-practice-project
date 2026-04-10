const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  userId: String,
  route: String,
  method: String,
  status: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Log", logSchema);
