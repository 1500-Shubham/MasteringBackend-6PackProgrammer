import { User } from "../models/routing_mvc_db.js";

export const getID=(req,res)=>{
    const value=req.params;
}

export const getAll=async(req,res)=>{
    // const users = await User.find({});
    // const params=req.query;
    // console.log(params);
    res.json({
        "success":true,
        "users":"kuch aayahoga"
    });
}


export const postNew=async(req,res)=>{
    const {name,email,password}=req.body;
    const users = await User.create({
        name:name,
        email:email,
        password:password
    });

    res.cookie("a","calue").json({
        "success":true,
        "message":"registered"
    });

}