// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // Middleware to verify JWT Token
// exports.verifyToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Failed to authenticate token' });
//     }
//     req.user = decoded; // Attach user payload to the request
//     next();
//   });
// };

// // Role-based Middleware
// exports.isAdmin = (req, res, next) => {
//   if (req.user.role !== 'admin') {
//     return res.status(403).json({ message: 'Admin role required' });
//   }
//   next();
// };


const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, admin123);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid Token' });
    }
};
