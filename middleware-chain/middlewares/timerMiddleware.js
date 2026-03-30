const timerMiddleware = (req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const end = Date.now();
        console.log(`⏱ Request Time: ${end - start} ms`);
    });

    next();
};

module.exports = timerMiddleware;
