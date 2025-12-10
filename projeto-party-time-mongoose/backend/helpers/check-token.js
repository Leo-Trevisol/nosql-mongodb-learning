const jwt = require("jsonwebtoken");

//middleware to check token validity

const checkToken = (req, res, next) => {

    const token = req.header("auth-token");

    if (!token) {
        return res.status(401).json({ error: "Access denied" });
    }

    try {
        const verified = jwt.verify(token, "nossosecret");

        req.user = verified;
        next();

    } catch (error) { 
        res.status(400).json({ error: "Invalid token" });
    }
};

module.exports = checkToken;