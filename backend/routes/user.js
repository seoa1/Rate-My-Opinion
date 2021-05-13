const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

router.post('/', (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.status(401).json("Error: "+err);
        }
        else {
            res.json(authData);
        }
    })
})

router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) throw err;

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
                jwt.sign({ user: req.body.username }, 'secretkey', (err, token) => {
                    res.json({ token });
                })
            }
        })
    })
});

router.get('/login', (req, res) => {
    res.json({ login: "here" });
});

router.post('/create', (req, res) => {
    const newUser = new User({ 
        username: req.body.username,
        password: req.body.password,
        comments: [],
        posts: [] 
    });
    newUser.save() //saves user to mongodb database
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;