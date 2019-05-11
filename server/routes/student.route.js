const express = require('express');
const router = express.Router();
const pool = require ('../modules/pool')

router.post('/', (req,res)=>{
    console.log('what is req', req.body);
    
    const studentFeedBack = req.body
    const queryText = `
    INSERT INTO feedback ("feeling")
VALUES ($1);
    `
    pool.query(queryText, [studentFeedBack.feeling] )
    .then((result)=>{
        console.log('POST', result.rows);
        res.sendStatus(201)
    })
    .catch((err)=>{
        console.log('Error in POST', err);
        res.sendStatus(500)
    })
})


// const studentFeedBack = req.body
// const queryText = `
//     INSERT INTO feedback ("feeling", "understanding", "support", "comments")
// VALUES ($1, $2, $3, $4);
//     `
// pool.query(queryText, [studentFeedBack.feeling, studentFeedBack.understanding, studentFeedBack.support, studentFeedBack.comments])
//     .then((result) => {
//         console.log('POST', result.rows);
//         res.sendStatus(201)
//     })
//     .catch((err) => {
//         console.log('Error in POST', err);
//         res.sendStatus(500)
//     })