const mongoose=require("mongoose")
const DetailSchema1=mongoose.Schema({
  brandName:String,
  brandIconUrl:String,
  links:[
    {
      label:String,
      url:String,
    },
  ],
});

module.exports=mongoose.model("detail",DetailSchema1)