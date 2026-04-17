const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "API is working",
    time: new Date(),
  });
});

module.exports = router;
