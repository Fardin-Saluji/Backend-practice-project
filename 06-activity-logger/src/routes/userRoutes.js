const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  res.json({ message: "User Profile" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login Success" });
});

module.exports = router;
