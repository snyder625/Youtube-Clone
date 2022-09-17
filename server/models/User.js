import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        unique: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string'
    },
    img: {
        type: 'string'
    },
    subscribers: {
        type: Number,
        default: 0
    },
    subscribedUsers: {
        type: []
    },
    fromGoogle: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

export default mongoose.model('User', UserSchema);