const jwt = require("jsonwebtoken");
const userModel = require('../model/userModel');
const authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies.authToken; // ✅ Get token from cookies

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY); // ✅ Verify token
        req.user = await userModel.findById(decoded.userId).select("-password"); // ✅ Fetch user details (excluding password)
        
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        next(); // ✅ Proceed to the next middleware
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authenticateUser;
