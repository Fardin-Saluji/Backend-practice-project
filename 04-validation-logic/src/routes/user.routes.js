const express = require("express");
const router = express.Router();

const { updateUserName } = require("../controllers/user.controller");

router.put("/:id", updateUserName);

module.exports = router;
