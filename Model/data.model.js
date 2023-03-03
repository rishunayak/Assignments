const mongoose=require("mongoose")


const dataSchema=mongoose.Schema({
    end_year:String,
    intensity:Number,
    sector:String,
    topic:String,
    insight:String,
    url:String,
    region:String,
    start_year:Number,
    impact:String,
    added:String,
    published:String,
    country:String,
    relevance:String,
    pestle:String,
    source:String,
    title:String,
    likelihood:Number,
})

const Data=mongoose.model("data",dataSchema)

module.exports=Data
