require("dotenv").config()
const express=require("express")

const cors=require("cors")
const connect = require("./Config/Config")
const data=require("./Routes/data.route")
const app=express()

app.use(express.json())
app.use(cors())
app.use("/data",data)

app.get("/",(req,res)=>
{
  
     res.send("Welcome to server")

})


app.listen(process.env.PORT,async()=>
{
    await connect
    console.log("Server started")
})
