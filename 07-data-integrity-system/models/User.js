const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: { 
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    age: {
      type: Number,
      required: true,
      min: [18, "Age must be at least 18"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
