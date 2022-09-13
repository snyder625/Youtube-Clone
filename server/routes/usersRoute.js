import express from 'express';
import {getUser, updateUser, deleteUser, subscribeUser, unsubscribeUser, like, dislike} from "../controllers/userController.js"
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//GET A USER
router.get('/find/:id', getUser);

//UPDATE USER
router.put('/:id', verifyToken, updateUser);

//DELETE USER
router.delete('/:id', verifyToken, deleteUser);

//SUBSCRIBE USER
router.put('/sub/:id', verifyToken, subscribeUser);

//UNSUBSCRIBE A USER
router.put('/unsub/:id', verifyToken, unsubscribeUser);

//LIKE A VIDEO
router.put("/like/:id", verifyToken, like)

//DISLIKE A VIDEOS
router.put("/dislike/:id", verifyToken, dislike)

export default router