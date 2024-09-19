const asyncHandler = require("../middleware/asyncHnalder");
const appError = require("../utils/AppError");
const Conversatation = require("../models/converstion.model");
const Message = require("../models/message.model");
exports.sendMessage = asyncHandler(async (req, res, next) => {
  const { message } = req.body;
  const { id: reciverId } = req.params; // get Reciver Id from from params
  const senderId = req.user._id;
  // cheack if conversatation exist
  let conversatation = await Conversatation.findOne({
    perticipants: { $all: [senderId, reciverId] },
  });
  // if not exist  create new conversatation
  if (!conversatation) {
    conversatation = await Conversatation.create({
      perticipants: [senderId, reciverId],
    });
  }
  // Create a new Message
  const newMessage = new Message({
    senderId,
    reciverId,
    message,
  });
  if (newMessage) conversatation.message.push(newMessage._id);

  // Socket IO functionalty will be here

  // this different way to save data in parallel
  await Promise.all([conversatation.save(), newMessage.save()]);
  // if conversatation exist push the new message to the conversatation
  res.status(201).json(newMessage);
});
