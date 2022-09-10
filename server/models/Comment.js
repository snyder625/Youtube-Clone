import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    userId: {
        type: 'string',
        required: true
    },
    videoId: {
        type: 'string',
        required: true
    },
    desc: {
        type: 'string',
        required: true
    }
}, {timestamps: true});

export default mongoose.model("Comment", CommentSchema);