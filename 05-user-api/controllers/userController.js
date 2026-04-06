const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const queryObj = { ...req.query };
    const excludedFields = ["page", "limit", "sort", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let query = User.find(queryObj);

    if (req.query.sort) query = query.sort(req.query.sort);

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    }

    query = query.skip(skip).limit(limit);

    const users = await query;

    res.status(200).json({
      status: "success",
      page,
      results: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
  
};

exports.createUsers = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ status: "success", data: user });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};
