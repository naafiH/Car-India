import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/user.route.js'


import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO).then( () =>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err)
})

const app = express() 

app.listen(3000, () => {
    console.log("server running on 3000 !");
})

app.use("/api/user",UserRouter)