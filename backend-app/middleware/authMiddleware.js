// authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  if(!req.headers['authorization']) {
    return res.status(401).json({ success: false, error: 'Unauthorized: No token provided' });
  }
  const tokenInfo = req.headers['authorization'];
  const token = tokenInfo.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, error: 'Unauthorized: Invalid token' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
