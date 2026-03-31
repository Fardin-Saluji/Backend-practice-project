const User = require("../models/user.model");

exports.updateUserName = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      message: "Name cannot be empty"
    });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name },
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.status(200).json(updatedUser);
  
  } catch (error) {
    return res.status(500).json({
      message: "Server error"
    });
  }
};
