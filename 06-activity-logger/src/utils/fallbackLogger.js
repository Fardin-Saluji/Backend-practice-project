const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../../fallback.log");

const fallbackLogger = (data) => {
  const logLine = JSON.stringify(data) + "\n";

  fs.appendFile(logFile, logLine, (err) => {
    if (err) {
      console.error("Fallback logging failed:", err.message);
    }
  });
};

module.exports = fallbackLogger;
