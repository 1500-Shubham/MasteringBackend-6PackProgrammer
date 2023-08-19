import express from "express"
import path from "path"
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backend"
}).then(()=>{
    console.log("Database Connected")
}).catch(e=>{
    console.log(e);
});
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
});
const User= mongoose.model("UserDetails",userSchema);

const app=express();
app.set("view engine","ejs");
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended:true})); // for req.body extract
app.use(cookieParser()); // cookie parser as middleware

const isAuthenticated= async (req,res,next)=>{
    const {token} =req.cookies; // this need cookie-parser
    if(token){
        const decodedToken=jwt.verify(token,"kuchsecretmsg");
        req.user=await User.findById(decodedToken._id);
        console.log(req.user);
        // now this is set as req data and can be used to pass params
        next();
    }
    else{
        res.render("auth_login");
    }
}

app.get("/",isAuthenticated,(req,res)=>{
    const user=req.user;
    res.render("auth_logout",{name:user.name});
});
app.post("/login", async (req,res)=>{
const {name,email}=req.body;
const user= await User.create({name:name,email:email});    
// jwt use now for unique token_value
const uniqueToken=jwt.sign({_id:user._id},"kuchsecretmsg");+
res.cookie("token",uniqueToken,{
    expires:new Date(Date.now()+60*1000)
})
res.redirect("/");
});

app.get("/logout",(req,res)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now())
    })
    res.redirect("/");
});

app.listen(5000,()=>{
    // callback function hai
});