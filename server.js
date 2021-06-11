// dependencies
require("dotenv").config();
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

// server listner
server.listen(process.env.PORT, () => {
  console.log("🎉🎉 Server is running on: " + process.env.PORT);
});
