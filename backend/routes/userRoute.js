const { getUsersForSidebar } = require("../controllers/user.controller");
const { protectRoute } = require("../middleware/protectRoute");

const router = require("express").Router();
router.get("/", protectRoute, getUsersForSidebar);
module.exports = router;
