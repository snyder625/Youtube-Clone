import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { createError } from "../error.js";

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

        const validation = await bcrypt.compare(req.body.password, user.password)
        if(!validation) return next(createError(404, "Invalid credentials!"));
    } catch (error) {
        next(error);
    }
};