const express=require("express")
const bodyParser=require("body-parser")
const https=require("https")
const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
    const city=""
    const units="metric"
    const apiKey="5ec11fa04c59f7ae33e22a41d0189f92"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
    //using express js..........................

    // https.get(url,function(response){
    //     response.on("data",function(data){
    //         const weatherData=JSON.parse(data)
    //         const city=weatherData.name
    //         const temp=weatherData.main.temp
    //         const description=weatherData.weather[0].description
    //         const icon=weatherData.weather[0].icon
    //         console.log(icon)
    //         res.write(`<p> The weather in ${city} is ${description}</p>`)
    //         res.write(`<h1>and the temperature is ${temp} degree celcius</h1>`)
    //         res.write(`<img src=https://openweathermap.org/img/wn/${icon}@2x.png />`)
    //         res.send()
    //         // const obj={
    //         //     name:"Debjit Adhikari",
    //         //     age:19
    //         // }
    //         // console.log(JSON.stringify(obj))
    //     })
    // })
    
    
})
app.post("/",function(req,res){
    console.log(req.body)
    const city=req.body.cityName
    const units=req.body.units
    const apiKey=req.body.key 
    // "5ec11fa04c59f7ae33e22a41d0189f92" 
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
    https.get(url,function(response){
        response.on("data",function(data){
            const weatherData=JSON.parse(data)
            const cityName=weatherData.name
            const temp=weatherData.main.temp
            const description=weatherData.weather[0].description
            const icon=weatherData.weather[0].icon
            res.write(`<p> The weather in ${cityName} is ${description}</p>`)
            res.write(`<h1>and the temperature is ${temp} degree celcius</h1>`)
            res.write(`<img src=https://openweathermap.org/img/wn/${icon}@2x.png />`)
            res.send()
        })

    })

})
//using promises..................
// app.get("/",function(req,res){
//     const url="https://api.openweathermap.org/data/2.5/weather?q=kolkata,india&units=metric&appid=5ec11fa04c59f7ae33e22a41d0189f92"
//     fetch(url)
//     .then(res=>{
//         return res.json()
//     })
//     .then(data=>{
//         const city=data.name
//         const temp=data.main.temp
//         const description=data.weather[0].description
//         const icon=data.weather[0].icon
//         res.write(`<p> The weather in ${city} is ${description}</p>`)
//         res.write(`<h1>and the temperature is ${temp} degree celcius</h1>`)
//         res.write(`<img src=https://openweathermap.org/img/wn/${icon}@2x.png />`)
//         res.send()
//     })

// })
app.listen(3000,function(){
    console.log("running")
})