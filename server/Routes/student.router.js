const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.post('/', (req, res) => {

    const studentData = req.body;
    console.log('req is', studentData);
    const queryText = `
      INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
      `
    pool.query(queryText, [studentData.feeling, studentData.understanding, studentData.support, studentData.comments])
        .then((result) => {
            console.log(result.rows);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`error in POST `, error);
            res.sendStatus(500);
        })
})

module.exports = router;