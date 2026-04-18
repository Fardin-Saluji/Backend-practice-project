const User = require("../models/User");


exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};


exports.getUsers = async (req, res) => {
  const users = await User.find({ isDeleted: false });
  res.json(users);
};


exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
      deletedAt: new Date(),
    },
    { new: true }
  );

  res.json({
    message: "User soft deleted",
    user,
  });
};


exports.restoreUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(
    id,
    {
      isDeleted: false,
      deletedAt: null,
    },
    { new: true }
  );

  res.json({
    message: "User restored",
    user,
  });
};
