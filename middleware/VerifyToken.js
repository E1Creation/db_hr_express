import jwt from "jsonwebtoken";
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(authHeader);
  if (token == null)
    return res.status(403).json({
      status: "fail",
      message: "you dont have a token",
    });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err)
      return res.status(403).json({
        status: "fail",
        message: "your token is wrong or already expired",
      });
    next();
  });
};

export default verifyToken;
