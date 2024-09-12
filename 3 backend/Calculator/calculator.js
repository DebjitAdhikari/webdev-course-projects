// import express from "express"
const express=require("express")
const bodyParser=require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    const num1=+req.body.name1
    const num2=+req.body.name2
    const result=num1+num2
    res.send("The result of your calculation is: "+result)
    console.log(req.body)
})
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})
app.post("/bmicalculator",function(req,res){
    const w=+req.body.weight
    const h=+req.body.height
    const bmi=w/(h*h)
    res.send(`<h1>Your bmi rate is ${bmi}</h1>`)
})
app.listen(3000,function(){
    console.log("server is running at port 3000")
})