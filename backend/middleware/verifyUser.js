var jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyUser = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res.send("Invalid access");
    }
    console.log(process.env.JWT_SECRET);
    const data =jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.send("User Verification failed");
  }
};
module.exports = verifyUser;
