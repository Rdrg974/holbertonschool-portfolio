const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

// Middleware to protect routes
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token is required' });

    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(500).json({ message: 'Token is invalid' });
        req.userId = decoded.id;
        next();
    });
};

// Route to get user information
router.get('/me', verifyToken, (req, res) => {
    db.query('SELECT * FROM User WHERE userId = ?', [req.userId], (err, results) => {
        if (err) return res.status(500).json({ message: 'There was a problem finding the user' });
        if (results.length === 0) return res.status(404).json({ message: 'No user found' });

        res.status(200).json(results[0]);
    });
});

module.exports = router;
