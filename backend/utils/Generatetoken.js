const jwt = require("jsonwebtoken");
const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: false,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};
module.exports = generateToken;
