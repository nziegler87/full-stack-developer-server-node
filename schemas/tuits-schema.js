import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    postedBy: {
        username: String
    },
    liked: Boolean,
    verified: Boolean,
    handle: String,
    title: String,
    time: String,
    "logo-image": String,
    "avatar-image": String,
    tuits: String,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number,
        dislikes: Number
    }

}, {collection: 'tuits'});
export default schema;