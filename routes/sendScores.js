const express = require('express');
const router = express.Router();
const db = require('../db');

// Route pour récupérer l'utilisateur
router.post('/getUser', (req, res) => {
    const { username } = req.body;
    let sql = 'SELECT userId, username FROM User WHERE username = ?';
    db.query(sql, [username], (err, result) => {
      if (err) throw err;
      res.send(result[0]);
    });
  });

// Endpoint pour ajouter un score (en additionnant avec l'ancien score)
router.post('/addscore', (req, res) => {
    const { userId, score } = req.body;

    // Récupérer l'ancien score (le plus récent)
    const getLastScoreQuery = 'SELECT score FROM Score WHERE userId = ?;';
    db.query(getLastScoreQuery, [userId], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }

        const oldScore = results.length > 0 ? results[0].score : 0;
        const newScore = oldScore + score;

        // Mettre à jour le score total
        const insertScoreQuery = 'INSERT INTO Score (score, userId) VALUES (?, ?)';
        db.query(insertScoreQuery, [newScore, userId], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send('Score updated successfully');
        });
    });
});

// Endpoint pour récupérer les scores individuels des utilisateurs
router.get('/scores', (req, res) => {
    const getScoresQuery = `
        SELECT User.username, Score.score, Game.nbrGameWon, Game.nbrGameLost, Game.nbrGamePlayed
        FROM User
        JOIN Score ON User.userId = Score.userId
        JOIN Game ON User.userId = Game.userId
        ORDER BY Score.score DESC;
    `;
    db.query(getScoresQuery, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
});


module.exports = router;
