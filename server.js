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
    if (err) console.log("🎃🎃 Error while connecting to DB.");
    console.log("🎉🎉 Connected to DB");
  }
);

// server listner
server.listen(process.env.PORT, () => {
  console.log("🎉🎉 Server is running on: " + process.env.PORT);
});
