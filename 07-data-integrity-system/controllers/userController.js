const User = require("../models/User");
const ApiError = require("../utils/ApiError");

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return next(new ApiError(400, "All fields are required"));
    }

    if (age < 18) {
      return next(new ApiError(400, "Age must be 18+"));
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new ApiError(409, "Email already exists"));
    }

    const user = await User.create({ name, email, age });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
