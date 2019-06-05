const router = require('express').Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
    db('cohorts')
    .then(cohorts => {
        res.status(200).json(cohorts);
    })
    .catch(err => {
        res.status(500).json({message: "something went wrong"})
    })
})

module.exports = router;