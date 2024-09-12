const express=require("express")
const bodyparser=require("body-parser")
const request=require("request")
const https=require("https")
const { METHODS } = require("http")
const app=express()

app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
    console.log("yeah")
})

app.post("/",function(req,res){
    const firstName=req.body.firstName
    const lastName=req.body.lastName
    const email=req.body.email
    const userData={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName,
                }
            }
        ]
    }
    const jsonData=JSON.stringify(userData)
    const url="https://us18.api.mailchimp.com/3.0/lists/095ac7abcd"
    const options={
        method:"post",
        auth:"debjit99:0ce53d27d682d71109b4d270f0a25306-us18"
    }
    const request=https.request(url,options,function(response){
        response.on("data",function(data){
            const jsonResData=JSON.parse(data)
            console.log(jsonResData)
            if(jsonResData.error_count>0)
                res.sendFile(__dirname+"/failure.html")
            else
                res.sendFile(__dirname+"/success.html")
        })
        
    })
    request.write(jsonData)
    request.end()
})
app.post("/failure",function(req,res){
    res.redirect("/")
})
app.listen(process.env.PORT||3000,()=>console.log("running"))
//"https://us18.api.mailchimp.com/3.0/"
//"https://mandrillapp.com/api/1.0/users/ping"
//api key
//d5f162015e096cf31aee61dcb92eb07c-us18
//0ce53d27d682d71109b4d270f0a25306-us18
//unique id
//095ac7abcd