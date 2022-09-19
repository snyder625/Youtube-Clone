import Video from '../models/Video.js';
import User from '../models/User.js';
import { createError } from '../error.js';

//CREATE A VIDEO
export const addVideo = async (req, res, next) => {
    const newVideo = new Video({userId: req.user.id, ...req.body});
    try {
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    } catch (error) {
        next(error);
    }
};

//UPDATE A VIDEO
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404, "Video not found"))

        if(req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new: true});
            res.status(200).json(updatedVideo);
        } else {
            return next(createError(403, "You can only update your Video"))
        }
    } catch (error) {
        next(error);
    }
};

//DELETE A VIDEO
export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if(!video) return next(createError(404, "Video not found"))

        if(req.user.id === video.userId) {
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("Video has been deleted");
        } else {
            return next(createError(403, "You can only delete your Video"))
        }
    } catch (error) {
        next(error);
    }
};

//GET A VIDEO
export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video);
    } catch (error) {
        next(error);
    }
};

//ADD VIEWS
export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: {views: 1}
        })
        res.status(200).json("The View has been increased");
    } catch (error) {
        next(error);
    }
};

//GET RANDOM VIDEOS
export const getRandomVideo = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{$sample: {size: 40}}])
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
}

//GET VIDEOS OF SUBSCRIBED USERS
export const subscribedVideos = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        const subscribedChannels = user.subscribedUsers;

        const list = await Promise.all(
            subscribedChannels.map(channelId => {
                return Video.find({userId: channelId})
            })
        )
        res.status(200).json(list.flat().sort((a, b)=>b.createdAt - a.createdAt));
    } catch (error) {
        next(error);
    }
};

//GET TRENDING VIDEOS
export const trendingVideos = async (req, res, next) => {
    try {
        const videos = await Video.find(req.params.id).sort({views: -1})
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
};

//SEARCH VIDEOS BY TAGS
export const getByTag = async (req, res, next) => {
    const tags = req.query.tags.split(",");
    try {
        const videos = await Video.find({ tags: { $in: tags }}).limit(20);
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
};

//SEARCH VIDEOS
export const searchVideos = async (req, res, next) => {
    const query = req.query.q;
    try {
        const videos = await Video.find({title: {$regex: query, $options: "i"}}).limit(40);
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
};