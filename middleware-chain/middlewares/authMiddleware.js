const authMiddleware = (req, res, next) => {
    const token = req.query.token;

    if (token === "12345") {
        console.log("Auth Successful");
        next();
    } else {
        res.status(401).send("Unauthorized: Invalid Token");
    }
};

module.exports = authMiddleware;
