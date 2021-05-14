const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

router.post('/', (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.json({found: false});
        }
        else {
            res.json({found: true});
        }
    })
})

router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.status(401).json('Error: ' + err);
            return;
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                jwt.sign({ user: req.body.username }, 'secretkey', (err, token) => {
                    res.json({ token, id: user._id });
                })
            }
            else {
                res.status(401).json('Incorrect Password');
            }
        })
    })
});

router.get('/login', (req, res) => {
    res.json({ login: "here" });
});

router.post('/create', (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const newUser = new User({ 
                username: req.body.username,
                password: hash,
                comments: [],
                posts: [] 
            });
            newUser.save() //saves user to mongodb database
                .then(() => res.json('User added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => console.log(err));
});

router.get('/id/:uid', (req, res) => {
    User.findById(req.params.uid)
        .then(user => {
            res.json({ username: user.username });
        })
        .catch(err => console.log(err));
})

module.exports = router;