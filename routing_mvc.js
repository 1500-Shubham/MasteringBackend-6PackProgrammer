// divide code into 
// controllers- functions
// models-- database
// routers- links

import express from "express"
import mongoose from "mongoose"
import userRouter from "./routers/routing_mvc_user.js"
import {config} from "dotenv"
config({
    path:"./config.env",
})

mongoose.connect(process.env.DB_URL,{
    dbName:"APITesting"
}).then(()=>{
    console.log("Database Connected")
}).catch(e=>{
    console.log(e);
});

const app=express();

app.use(express.json());
app.use("/users",userRouter); //attaching router with prefix users iske baad 

class ErrorHandler extends Error {
    constructor(msg,statusCode){
        super(msg);
        this.statusCode=statusCode;
    }
}

app.use((err,req,res,next)=>{
    console.log(err.message);
    return res.send("HI");
}) // handler hai aage ke liye

app.get("/",(req,res,next)=>{
    //return next(new Error("message")); // app.use chala gaya
    //or
    return next(new ErrorHandler("message",404));
});


app.listen(process.env.PORT,()=>{});