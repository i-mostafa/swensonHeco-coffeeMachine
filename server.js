// dependencies
require("dotenv").config();
const http = require("http");
const server = http.createServer(app);

// server listner
server.listen(process.env.PORT, () => {
  console.log("🎉🎉 Server is running on: " + process.env.PORT);
});
