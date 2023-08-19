// learned how to use postman to POST request since 
// Browser only use get request

// POST - BOdy - JSON-- req.body={}
// GET- PARAMS -- req.query

import express from "express"
import path from "path"
import cookieParser from "cookie-parser";
// import jwt from "jsonwebtoken"
import mongoose from "mongoose"
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"APITesting"
}).then(()=>{
    console.log("Database Connected")
}).catch(e=>{
    console.log(e);
});
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
const User= mongoose.model("UserDetails",userSchema);
const app=express();

//using middleware to convert req.body data that we received
app.use(express.json());

//dynamic url
app.get("/user/:id",(req,res)=>{
    const value=req.params;
    // when url /user/shubham
    // value ={id : shubham};
    // params use for this
})

app.get("/users/all",async(req,res)=>{
    const users = await User.find({}); // return all User objects
    const params=req.query;
    console.log(params);
    res.json({
        "success":true,
        "users":users
    });

})

app.post("/users/new",async(req,res)=>{
    const {name,email,password}=req.body;
    const users = await User.create({
        name:name,
        email:email,
        password:password
    }); // return all User objects

    res.cookie("a","calue").json({
        "success":true,
        "message":"registered"
    });

})

app.listen(5000,()=>{});