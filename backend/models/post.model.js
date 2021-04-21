const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
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
    },
    likes: {
        type: Number,
        required: true
    },
    comments: {
        type: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);