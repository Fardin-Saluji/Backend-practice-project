const express = require("express");
const loggerMiddleware = require("./middleware/loggerMiddleware");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// logging middleware
app.use(loggerMiddleware);

app.use("/api/user", userRoutes);

module.exports = app;
