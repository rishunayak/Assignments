const express=require("express")
const Data = require("../Model/data.model")


const app=express.Router()



app.get("/",async(req,res)=>
{

    try
    {
        let data= await Data.find()
        res.send(data)
    }
    catch(e)
    {
        res.send(e)
    }
})


module.exports=app