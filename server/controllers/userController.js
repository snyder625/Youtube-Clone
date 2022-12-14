import express from 'express';
import { createError } from '../error.js';
import User from '../models/User.js';
import Video from '../models/Video.js';

//UPDATE USER
export const updateUser = async (req, res, next) => {
    if(req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body,}, {new: true});
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    } else {
        return next(createError(403, "You can only update your account"));
    }
};

//DELETE USER
export const deleteUser = async (req, res, next) => {
    if(req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        } catch (error) {
            next(error);
        }
    } else {
        return next(createError(403, "You can only delete your account"));
    }
};

//GET A USER
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error);
    }
};

//SUBSCRIBE USER
export const subscribeUser = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push:{subscribedUsers: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc:{subscribers: 1}
        })
        res.status(200).json("Subscription Successful");
    } catch (error) {
        next(error);
    }
};

//UNSUBSCRIBE A USER
export const unsubscribeUser = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull:{subscribedUsers: req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc:{subscribers: -1}
        })
        res.status(200).json("User unsubscribed Successful");
    } catch (error) {
        next(error);
    }
};

//LIKE A VIDEO
export const like = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: {likes: id},
            $pull: {dislikes: id}
        })
        res.status(200).json("The video has been liked")
    } catch (error) {
        next(error);
    }
};

//DISLIKE A VIDEOS
export const dislike = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: {dislikes: id},
            $pull: {likes: id}
        })
        res.status(200).json("The video has been disliked")
    } catch (error) {
        next(error);
    }
};