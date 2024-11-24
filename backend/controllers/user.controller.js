const asyncHnalder = require("../middleware/asyncHnalder");
const User = require("../models/user.model");

exports.getUsersForSidebar = asyncHnalder(async (req, res, next) => {
  const LoggedInUser = req.user._id;
  const allUsers = await User.find({ _id: { $ne: LoggedInUser } }).select(
    "-password -__v"
  ); // Find all users Exeept the Logged in user
  res.status(200).json(allUsers);
});
exports.getLoggedinUser = asyncHnalder(async (req, res, next) => {
  const LoggedInUser = req.user._id;

  const user = await User.findOne({ _id: LoggedInUser });
  res.status(200).json(user);
});
