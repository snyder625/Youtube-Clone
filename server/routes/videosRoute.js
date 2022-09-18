import express from 'express';
import { addVideo, addView, deleteVideo, getByTag, getRandomVideo, getVideo, searchVideos, subscribedVideos, trendingVideos, updateVideo } from "../controllers/videoController.js"
import {verifyToken} from '../verifyToken.js'

const router = express.Router();

//CREATE A VIDEO
router.post('/', verifyToken, addVideo)

//UPDATE A VIDEO
router.put('/:id', verifyToken, updateVideo)

//DELETE A VIDEO
router.delete('/:id', verifyToken, deleteVideo)

//GET A VIDEO
router.get('/find/:id', getVideo)

//ADD VIEW 
router.put('/view/:id', verifyToken, addView)

//GET TRENDING VIDEOS
router.get('/trend', trendingVideos)

//GET RANDOM VIDEOS
router.get('/random', getRandomVideo)

//GET VIDEOS OF SUBSCRIBED CHANNELS
router.get('/sub', verifyToken, subscribedVideos)

//GET VIDEOS BY TAG
router.get('/tags', getByTag)

//GET VIDEOS BY SEARCH
router.get('/search', searchVideos)

export default router