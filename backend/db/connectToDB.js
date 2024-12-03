const mongoose = require("mongoose");
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connnected to MongoDB ^_^");
  } catch (error) {
    console.log("Error Connecting to MongoDB", error.message);
  }
};
module.exports = connectToDB;
