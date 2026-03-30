const express = require("express");
const app = express();

const authMiddleware = require("./middlewares/authMiddleware");
const timerMiddleware = require("./middlewares/timerMiddleware");
const profileRoute = require("./routes/profile");

app.use("/profile", timerMiddleware, authMiddleware, profileRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
