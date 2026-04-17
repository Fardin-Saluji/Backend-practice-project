const express = require("express");
const rateLimiter = require("./middleware/rateLimiter");
const testRoute = require("./routes/testRoute");

const app = express();

app.use(rateLimiter);

app.use("/api", testRoute);

module.exports = app;
