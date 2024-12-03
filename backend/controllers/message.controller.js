const asyncHandler = require("../middleware/asyncHnalder");
const Conversatation = require("../models/converstion.model");
const Message = require("../models/message.model");
const { getReceiverSocketId, io } = require("../socket/socket");
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
  // this different way to save data in parallel
  await Promise.all([conversatation.save(), newMessage.save()]);
  // Socket IO functionalty will be here
  const receiverSocketId = getReceiverSocketId(reciverId);
  if (receiverSocketId) {
    //io.to(socketid).emit()used to send event to specific client
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }
  // if conversatation exist push the new message to the conversatation
  res.status(201).json(newMessage);
});
exports.getMessage = asyncHandler(async (req, res, next) => {
  const { id: userToChatId } = req.params;
  const senderId = req.user._id;
  const conversatation = await Conversatation.findOne({
    perticipants: { $all: [senderId, userToChatId] },
  }).populate("message"); // that will populate the message field with the message object get the message one by one
  if (!conversatation) return res.status(200).json([]);
  const messages = conversatation.message;
  res.status(200).json(messages);
});
