const mongoose=require("mongoose")

const Slider=mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    Class:String
})

module.exports=mongoose.model('slider',Slider)