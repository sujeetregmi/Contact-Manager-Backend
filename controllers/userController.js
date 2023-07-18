const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required.");
  }
  const userAvailabe = await User.findOne({ email });
  if (userAvailabe) {
    res.status(400);
    throw new Error("User already registered!");
  }
  //hashing password
  var saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  //   console.log(hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.send(400);
    throw new Error("User data invalid.");
  }
  res.json({
    message: "User Registration.",
  });
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({
    message: "User Login.",
  });
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Current User info.",
  });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
