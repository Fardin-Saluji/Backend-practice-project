const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    let { page = 1, limit = 10, age, name, fields } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    let queryObj = {};

   
    if (age) {
      queryObj.age = age;
    }

    if (name) {
      queryObj.name = { $regex: name, $options: "i" };
    }

    let query = User.find(queryObj);

  
    if (fields) {
      const selectedFields = fields.split(",").join(" ");
      query = query.select(selectedFields);
    }

   
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    const users = await query;

    res.status(200).json({
      success: true,
      page,
      count: users.length,
      data: users
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
