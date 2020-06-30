const express = require('express');
const mysql = require('../scripts/mysqlConnection');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    })
});

router.post('/login', (req, res) => {

    const { username, password } = { ...req.body };

    const SQL = `SELECT username FROM users WHERE username = '${username}' AND password = '${password}'`;
    mysql.query(SQL, (error, result, fields) => {
        if (error) {
            console.log(error);
        }
        res.json(result);
    });
});

module.exports = router;