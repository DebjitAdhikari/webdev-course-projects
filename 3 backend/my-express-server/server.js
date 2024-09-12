// const express = require("express")
import express from "express"
const app = express()
app.get("/",function(req,res){
    res.send("<h1>Hello</h1>")
})
app.get("/contact",function(req,res){
    res.send("contact me at: debjitadhikari122@gmail.com")
})
app.get("/about",function(req,res){
    res.send("this page is owned by Debjit Adhikari")
})
app.get("/ho",function(req,res){
    res.send("what?")
})
app.get("/enemy",function(req,res){
    res.send("You ain't mine enemy")
})
app.listen(3000,function(){
    console.log("running")
})