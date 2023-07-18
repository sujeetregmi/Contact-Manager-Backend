const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");

router.route("/register").get(registerUser);
router.route("/login").get(loginUser);
router.route("/current").get(currentUser);

module.exports = router;
