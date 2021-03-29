// const router = require('express').Router();
// const jwt = require('jsonwebtoken');
// const User = require('../models/user.model');

// router.post('/', (req, res) => {
//     User.findOne({ username: req.body.username }, (err, user) => {
//         if (err) throw err;

//         user.comparePassword(req.body.password, (err, isMatch) => {
//             if (err) throw err;

//             if (isMatch) {
//                 jwt.sign({ user: req.body.username }, 'secretkey', (err, token) => {
//                     res.json({ token });
//                 })
//             }
//         })
//     })
// });

// router.get('/', (req, res) => {
//     res.json({ login: "here" });
// })

// module.exports = router;