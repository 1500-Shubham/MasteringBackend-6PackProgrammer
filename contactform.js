// this is done after basics.js and express.js
import express from "express"
import path from "path"
import mongoose from "mongoose"
// connnect mongo DB compass
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backend"
}).then(()=>{
    console.log("Database Connected")
}).catch(e=>{
    console.log(e);
});
const contactSchema= new mongoose.Schema({
    name:String,
    email:String,
});
const contactMsg= mongoose.model("Message",contactSchema);
//this message is collection acts like particular table holding that schema
const users=[];
const app= express();
app.set("view engine","ejs");
// middleware
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
res.render("./contactform.ejs");
});
app.post("/contactform",(req,res)=>{
    users.push({"name":req.body.name,"email":req.body.email});
    // creating data in database
    contactMsg.create({name:req.body.name,email:req.body.email});
    res.redirect("/userDetails");
});
app.get("/userDetails",(req,res)=>{
res.send(users);
});
app.listen(5000,()=>{
    // callback function hai
});