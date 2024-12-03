const {
  getUsersForSidebar,
  getLoggedinUser,
} = require("../controllers/user.controller");
const { protectRoute } = require("../middleware/protectRoute");

const router = require("express").Router();
router.get("/", protectRoute, getUsersForSidebar);
router.get("/loggeduser", protectRoute, getLoggedinUser);
module.exports = router;
