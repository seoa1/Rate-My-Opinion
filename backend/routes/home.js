const { verifyToken } = require('../auth/verify');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.redirect('/user/login');
        }
        else {
            res.json(authData);
        }
    })
})

module.exports = router;