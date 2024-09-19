const { sendMessage } = require("../controllers/message.controller");
const { protectRoute } = require("../middleware/protectRoute");

const router = require("express").Router();
router.post("/send/:id", protectRoute, sendMessage);
module.exports = router;
