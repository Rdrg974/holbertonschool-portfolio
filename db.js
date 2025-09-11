const mysql = require('mysql2');
const fs = require('fs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Classe-97420',
    database: 'db-game-othello',
    multipleStatements: true
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');

    const sql = fs.readFileSync('./othello-database.sql', 'utf8');
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log('SQL file executed!');
    });
});

module.exports = db;
