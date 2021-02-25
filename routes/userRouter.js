const express = require("express");
const {
  registerUser,
  loginUser,
  protect,
  getUserProfile,
} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/", protect, getUserProfile);

module.exports = router;
