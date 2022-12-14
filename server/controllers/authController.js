import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { createError } from "../error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPass;
        const newUser = new User(req.body);

        await newUser.save();
        res.status(200).json("User Signed Up successfully!");
    } catch (error) {
        next(error);
    }
};


export const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({name: req.body.name});
        if (!user) return next(createError(404, "User not found!"));

        const validation = bcrypt.compare(req.body.password, user.password)
        if(!validation) return next(createError(404, "Invalid credentials!"));

        const token = jwt.sign({id: user._id}, process.env.JWT_KEY)
        const {password, ...otherDetails} = user._doc
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(otherDetails)
    } catch (error) {
        next(error);
    }
};

export const googleAuth = async (req, res, next) => {
    try {
        const user = await User.findOne({email:req.body.email});
        if (user) {
            const token = jwt.sign({id: user._id}, process.env.JWT_KEY);
            res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json(user._doc)
        } else {
            const newUser = new User({
                ...req.body,
                fromGoogle: true,
            });
            const savedUser = await newUser.save();
            const token = jwt.sign({id: savedUser._id}, process.env.JWT_KEY);
            res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json(savedUser._doc)
        }
    } catch (error) {
        next(error);
    }
};