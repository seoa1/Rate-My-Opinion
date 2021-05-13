const router = require('express').Router();
const Post = require("../models/post.model");
const User = require('../models/user.model');

router.get('/', (req, res) => {
    Post.find({}, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});

router.post('/create', (req, res) => {
    User.findById(req.body.id)
        .then(user => {
            const newPost = new Post({ 
            author: user._id, 
            title: req.body.title, 
            body: req.body.body,
            likes: 0,
            comments: []
            });
            user.posts.unshift(newPost._id);
            user.save();
            newPost.save()
                .then(() => res.json('Post created!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    
})

module.exports = router;