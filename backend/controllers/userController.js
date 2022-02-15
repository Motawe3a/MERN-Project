const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const userModel = require("../models/userModel");

//@desc Register new User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }
  // check exist user
  const userExist = await userModel.findOne({ email });
  if (userExist) {
      res.status(400);
    throw new Error("user already exist");
  }
  // hash using decrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

//@desc loginUser User
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

//@desc Register new User
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data" });
});

module.exports = { registerUser, loginUser, getMe };
