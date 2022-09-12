import express from 'express';
import {getUser, updateUser, deleteUser, subscribeUser, unsubscribeUser, like, dislike} from "../controllers/userController.js"

const router = express.Router();

//GET A USER
router.get('/find/:id', getUser);

//UPDATE USER
router.put('/:id', updateUser);

//DELETE USER
router.delete('/:id', deleteUser);

//SUBSCRIBE USER
router.put('/sub/:id', subscribeUser);

//UNSUBSCRIBE A USER
router.put('/sub/:id', unsubscribeUser);

//LIKE A VIDEO
router.put("/like/:id", like)

//DISLIKE A VIDEOS
router.put("/dislike/:id", dislike)

export default router