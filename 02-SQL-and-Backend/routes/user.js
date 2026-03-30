const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/users', (req, res) => {
    let { minAge, limit } = req.query;

    let sql = "SELECT * FROM users WHERE 1=1";

    if (minAge) {
        sql += ` AND age >= ${minAge}`;
    }

    sql += " ORDER BY age DESC";

    if (limit) {
        sql += ` LIMIT ${parseInt(limit)}`;
    }

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
