const express = require("express");

const app = express();

// middlewares
app.use(express.json());

app.get("test", (req, res, next) => {
  res.json({ status: "ok" });
});

// export application
module.exports = app;
