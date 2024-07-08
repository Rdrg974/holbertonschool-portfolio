const mysql = require('mysql');

const db = mysql.createConnection(process.env.JAWSDB_URL);

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;
