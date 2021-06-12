// error handler for uncaught exeptions
process.on("uncaughtException", (err) => {
  process.env.NODE_ENV === "development" &&
    console.error(`🚨 UnCaught exeption thrown${err}`, err.stack);
});

// dependencies
require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const server = http.createServer(app);

// connect to db
mongoose.connect(
  process.env.DBURL,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err)
      process.env.NODE_ENV === "development" &&
        console.log("🎃🎃 Error while connecting to DB.");
    process.env.NODE_ENV === "development" &&
      console.log("🎉🎉 Connected to DB");
  }
);

// server listner
server.listen(process.env.PORT, () => {
  process.env.NODE_ENV === "development" &&
    console.log("🎉🎉 Server is running on: " + process.env.PORT);
});

// error handler for unHandled rejections
process.on("unhandledRejection", (reason, promise) => {
  process.env.NODE_ENV === "development" &&
    console.error(`🚨 UnHandledRejection on ${promise} because ${reason}`);
});
