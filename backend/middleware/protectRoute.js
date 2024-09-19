const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
exports.protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    if (!token)
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    const user = await User.findOne(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in ProtectRoute Middleware", error.message);
    res.status(500).json({ error: "internal Server Error" });
  }
};
e;
