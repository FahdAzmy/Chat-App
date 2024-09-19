const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reciverId: {
      type: mongoose.Schema.Types.ObjectId,
      res: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const messageModel = mongoose.model("Message", messageSchema);
module.exports = messageModel;
