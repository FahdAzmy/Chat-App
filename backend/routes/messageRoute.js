const {
  sendMessage,
  getMessage,
} = require("../controllers/message.controller");
const { protectRoute } = require("../middleware/protectRoute");

const router = require("express").Router();
router.get("/:id", protectRoute, getMessage); //get MEessages between two users
router.post("/send/:id", protectRoute, sendMessage);
module.exports = router;
