const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('home');
    res.json({hello:"there"})
})

module.exports = router;