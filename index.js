const { json } = require("body-parser");
const express=require("express");
const app=express();
app.get("",function(req,res){
    res.send({name:"hello"});
});
app.get("/books",function (req,res){
    const data=[{book:"Fort nine days",
                author:"Amrita Pritam"},
                 {book:"Kalpana chawla-Alife",
                  author:"Anil Padmanabham"},
                  {book:"Fasting feasting",
                  author:"Anita Desai"},
                  {book:"Shadow Lines",
                  author:"Amitav Ghosh"},];
                  JSON.stringify(data)
    res.send(data);
});
app.listen(4000,()=>{
    console.log("sab thik hai");
});