import Video from '../models/Video.js';

//CREATE A VIDEO
export const addVideo = async (req, res, next) => {
    const newVideo = new Video({userId: req.user.id, ...req.body});
    try {
        const savedVideo = await newVideo.save();
    } catch (error) {
        next(error);
    }
}

//UPDATE A VIDEO
export const updateVideo = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

//DELETE A VIDEO
export const deleteVideo = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

//GET A VIDEO
export const getVideo = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}