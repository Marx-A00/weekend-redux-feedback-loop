const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    const inputToAdd = req.body;
    console.log(inputToAdd)

    const queryText = 
    `
    INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments","date")
    VALUES
    ($1, $2, $3, $4, $5);
    `
    const sqlValues = 
    [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments,
        req.body.date
    ]

    pool.query(queryText,sqlValues)
    .then((dbResult)=>{
        res.sendStatus(201)
    })
    .catch((dbError)=>{
        console.log('POST /feedback query failed',dbError)
    })
});


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;