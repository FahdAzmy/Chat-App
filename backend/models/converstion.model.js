const mongoose = require("mongoose");
const converstionSchema = new mongoose.Schema(
  {
    perticipants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const converstionModel = mongoose.model("converstion", converstionSchema);
module.exports = converstionModel;
