// run file here write
// node ./basics.js
// using node js run ho raha

// making server
import http from "http"
import name,{age,gender} from "./import-export.js"
import * as imexport from "./import-export.js"
import per from "./import-export.js";
import fs from "fs"
// reading writing file
const home=fs.readFileSync("./home.html");

//const http=require("http");
//  console.log(http);
const server =http.createServer((req,res)=>{
//   console.log("Goto Browser")
// is url visit then all parameters req se mil jayega

//Using req
//console.log(req.url); // return / or /about

// Using res
//res.end("Noice");
//res.end("<h1>RES mein jo browser<h1/>");

//coding type practice
if(req.url=="/about"){
    //rendering type
    res.end(`<h1>AboutPage Percentage is ${per()}<h1/>`);
}
else if(req.url=="/"){
    // including variables in JS inside HTML
    res.end(home);
}else{
    res.end("<h1>PageNotFound<h1/>"); 
}
}); 
//listening
server.listen(5000,()=>{
    console.log("Server working")
});