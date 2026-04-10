const logActivity = require("../services/logService");

const loggerMiddleware = (req, res, next) => {
  const startTime = Date.now();

  res.on("close", () => {
    const logData = {
      userId: req.headers["user-id"] || "anonymous",
      route: req.originalUrl,
      method: req.method,
      status: res.statusCode,
      timestamp: new Date()
    };

    console.log("LOG DATA:", logData);

    // async logging (non-blocking)
    setImmediate(() => {
      logActivity(logData);
    });
  });

  next();
};

module.exports = loggerMiddleware;
