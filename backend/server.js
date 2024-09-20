const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/authRoute");
const messageRoute = require("./routes/messageRoute");
const userRoute = require("./routes/userRoute");
const { GlobalErrorHandler } = require("./middleware/errorHandling");

const connectToDB = require("./db/connectToDB");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // To Parsing the Data from the body
app.use(cookieParser());

//Rotues
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);
app.listen(PORT, () => {
  connectToDB();
  console.log("Server Listening on Port", PORT);
});

// Error handling
app.use(GlobalErrorHandler);
