const router = require('express').Router();
const { json } = require('express');
const Post = require("../models/post.model");

router.get('/', (req, res) => {
    Post.find({}, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.json(data);
    });
});

router.post('/create', (req, res) => {
    const newPost = new Post({ user: req.body.user, title: req.body.title, body: req.body.body });
    newPost.save()
        .then(() => res.json('Post created!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;