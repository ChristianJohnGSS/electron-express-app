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

router.post('/users/store', (req, res) => {

    const { username, password } = { ...req.body };

    const SQL = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
    mysql.query(SQL, (error, result, fields) => {
        if (error) {
            console.log(error);
        }
        console.log(result)
        res.json("User created!");
    });
});

router.delete('/users/delete', (req, res) => {

    const SQL = `DELETE FROM users WHERE username = '${req.body.username}'`;
    mysql.query(SQL, (error, result, fields) => {
        if (error) {
            console.log(error);
        }
        console.log(result)
        res.json("User deleted!");
    });
});

router.put('/users/update', (req, res) => {

    const { username, password } = { ...req.body };

    const SQL = `UPDATE users SET password = '${password}' WHERE username = '${username}`;
    mysql.query(SQL, (error, result, fields) => {
        if (error) {
            console.log(error);
        }
        console.log(result)
        res.json("User updated!");
    });
});

module.exports = router;