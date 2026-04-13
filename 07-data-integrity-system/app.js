const express = require("express");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());

app.use("/api", userRoutes);

// Error middleware (last)
app.use(errorHandler);

module.exports = app;
