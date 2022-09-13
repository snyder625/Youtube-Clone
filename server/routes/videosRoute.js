import express from 'express';
import { addVideo, deleteVideo, getVideo, updateVideo } from "../controllers/videoController.js"
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

export default router