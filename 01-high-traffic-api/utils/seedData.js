

const mongoose = require("mongoose");
const User = require("../models/userModel");

mongoose.connect("mongodb://127.0.0.1:27017/highTrafficDB");

const seedUsers = async () => {
  await User.deleteMany();

  let users = [];

  for (let i = 1; i <= 300; i++) {
    users.push({
      name: `User${i}`,
      email: `user${i}@gmail.com`,
      age: Math.floor(Math.random() * 50) + 18
    });
  }

  await User.insertMany(users);
  console.log("300 Users Inserted");
  process.exit();
};

seedUsers();
