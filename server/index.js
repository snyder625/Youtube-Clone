import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/usersRoute.js'
import videoRoutes from './routes/videosRoute.js'
import commentRoutes from './routes/commentsRoute.js'
import authRoutes from './routes/authRoute.js'

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));

const connect = ()=> {
    mongoose.connect(process.env.MONGO).then(() =>{
        console.log("Connected to DB")
    }).catch((err) => {throw err})
}

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    });
});

app.listen(5000, ()=>{
    connect();
    console.log("App is running on port 5000")
})