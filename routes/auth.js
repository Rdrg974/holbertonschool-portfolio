const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

// Register route
router.post('/register', (req, res) => {
    console.log('Requête reçue pour /register:', req.body);
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    db.query('INSERT INTO User (username, email, pwd) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', err);
            return res.status(500).json({ message: 'There was a problem registering the user' });
        }
        const token = jwt.sign({ id: result.insertId, username: username }, 'secretkey', { expiresIn: 86400 }); // 24 hours
        res.status(200).json({ auth: true, token: token });
    });
});

// Login route
router.post('/login', (req, res) => {
    console.log('Requête reçue pour /login:', req.body);
    const { email, password } = req.body;

    db.query('SELECT * FROM User WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error on the server' });
        if (results.length === 0) return res.status(404).json({ message: 'No user found' });

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.pwd);
        if (!passwordIsValid) return res.status(401).json({ message: 'Invalid password', auth: false });

        const token = jwt.sign({ id: user.userId, username: user.username }, 'secretkey', { expiresIn: 86400 }); // 24 hours
        res.status(200).json({ auth: true, token: token, username: user.username });
    });
});

module.exports = router;
