const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to protect routes
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token is required');
    
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(500).send('Token is invalid');
        req.userId = decoded.id;
        next();
    });
};
app.use(express.static(path.join(__dirname, 'public')));
// Register route
app.post('/', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    db.query('INSERT INTO User (username, email, pwd) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).send('There was a problem registering the user');
        
        const token = jwt.sign({ id: result.insertId }, 'secretkey', { expiresIn: 86400 }); // 24 hours
        res.status(200).send({ auth: true, token: token });
    });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM User WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).send('Error on the server');
        if (results.length === 0) return res.status(404).send('No user found');

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.pwd);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user.userId }, 'secretkey', { expiresIn: 86400 }); // 24 hours
        res.status(200).send({ auth: true, token: token });
    });
});

// Route to get user information
app.get('/me', verifyToken, (req, res) => {
    db.query('SELECT * FROM User WHERE userId = ?', [req.userId], (err, results) => {
        if (err) return res.status(500).send('There was a problem finding the user');
        if (results.length === 0) return res.status(404).send('No user found');

        res.status(200).send(results[0]);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
