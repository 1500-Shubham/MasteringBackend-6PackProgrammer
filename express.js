// npm i // only nec dependencies install 
// gonna learn EXPRESS.JS
// npm install express
import express from "express"
import path from "path"
// for abosulte path wherever needed
// console.log(path.join(path.resolve(),"./index.html")); 
// for EJS visit website npm i ejs
// views- index.ejs auto read now

const app=express();
// server created
// attaching view engine EJS
app.set("view engine","ejs");

// public folder files ko include karna direct ..../pub.html url daalo toh show ho jao
app.use(express.static(path.join(path.resolve(),"public"))); // folder declared


app.get("/",(req,res)=>{
    //res.send("hi"); // simple sending to browser
    //res.sendStatus(404); //sendign status code
    // res.send().sendStatus(); //chaining both
    // res.sendFile(path.join(path.resolve(),"./index.html")); // sendFile will send static website

    //sending dynamic file use EJS and can use res.render()
    //res.render("./dynamicEJS.ejs"); // automatic views-> inside chala jayega
    res.render("./dynamicEJS.ejs",{param1:"Shubham"});
})
app.listen(5000,()=>{
    // callback function hai
});


