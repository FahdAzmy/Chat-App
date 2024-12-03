const asyncHandler = require("../middleware/asyncHnalder");
const appError = require("../utils/AppError");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/Generatetoken");
/**
 * @desc Register a new user and create an account
 * @route POST /api/auth/signup
 * @access Public
 */
exports.singup = asyncHandler(async (req, res, next) => {
  const { fullname, username, password, confirmPassword, gender } = req.body;
  if (password !== confirmPassword)
    return next(new appError("Password Not Match", 400));
  const user = await User.findOne({ username });
  if (user) return next(new appError("User Already Exists", 400));
  // Get Random Profile Pic
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  // Hashed Password
  const HashedPassword = await bcrypt.hash(password, 10);

  //create New Users
  const newUser = await User.create({
    fullname,
    username,
    password: HashedPassword,
    gender,
    profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
  });
  generateToken(newUser._id, res);
  await newUser.save();
  res.status(201).json({ message: "User Created Successfully", user: newUser });
});
/**
 * @desc Login an existing user and generate an authentication token
 * @route POST /api/auth/login
 * @access Public
 */
exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password || ""
  );
  if (!user || !isPasswordCorrect)
    return next(new appError("Invalid Email Or Password", 404));
  generateToken(user._id, res);
  res.status(200).json({ message: "User Logged in Succefully" });
});
/**
 * @desc Logout the current user and clear the authentication token
 * @route POST /api/auth/logout
 * @access Private
 */
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({
    message: "User Logged out Succefully",
  });
});
