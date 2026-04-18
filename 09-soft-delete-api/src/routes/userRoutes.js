const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  deleteUser,
  restoreUser,
} = require("../controllers/userController");

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);


router.put("/restore/:id", restoreUser);

module.exports = router;
