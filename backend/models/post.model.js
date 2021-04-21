const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);