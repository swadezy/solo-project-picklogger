const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/all', (req, res) => {
  console.log('in get all locks');
  const queryText = `SELECT * FROM "locks";`;
  pool
    .query(queryText)
    .then((result) => {
      console.log('received all locks', result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in fetch all locks', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log('in post lock, received', req.body);
});

module.exports = router;
