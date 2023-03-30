const express=require('express');

const routes=express.Router();

const Detail=require("../models/Detail");
const Slider = require('../models/Slider');


routes.get("/",async(req,res)=>
{
    const details=await Detail.findOne({"_id":"640193a92bb70630e4c27544"})
    const slides=await Slider.find()
    // console.log(slides)
    
    
    // console.log(details)
    res.render('index',{
        details:details,
        slides:slides
    })
    
})

routes.get('/gallery',async(req,res)=>
{
    const details=await Detail.findOne({"_id":"640193a92bb70630e4c27544"})

    res.render('gallery',{
        details:details
    });
})

module.exports=routes