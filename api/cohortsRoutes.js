const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h2>Successfully retrieved route</h2>')
})

module.exports = router;