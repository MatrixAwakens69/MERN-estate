import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to db');
    })
    .catch((err) => {
        console.error(err);
    });

const app = express();

app.listen(3000, () => {
    console.log('Server listening to port 3000');
});

app.use('/api/user', userRouter);