const express=require('express')
const hbs=require('hbs')
const app=express();

const routes=require('./routes/main')
// const Deatil=require("./models/Detail")

const Slider1=require("./models/Slider");
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/website');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}






// /static/css/style.css
app.use('/static',express.static("public"));
app.use('',routes)

// (template engine)

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")





app.listen(process.env.PORT | 8941,()=>{
    console.log('server started');
});


app.get("/",(request,response)=>{
    response.send("wow this is data from server hi");
});


// const kittySchema = new mongoose.Schema({
//     name: String
// });
// const Kitten = mongoose.model('Kitten', kittySchema);
// const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.save();

const DetailSchema=new mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
      {
        label:String,
        url:String,
      },
    ],
  });

  const SliderSchema=new mongoose.Schema({

    links:[
      {
        title:String,
        subTitle:String,
        imageUrl:String,
        Class:String
      },
    ],
  });









const Detail = mongoose.model('Detail', DetailSchema);
const Slider = mongoose.model('Slider', SliderSchema);



// const D = new Detail({ 
//     brandName:"TK Technical Solution",
//     brandIconUrl:"https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj",
//     links:[
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//           label:"About",
//           url:"/about"
//       },
//         {
//             label:"Contact us",
//             url:"/contact  "
//         }

//     ]
//  });

//  D.save();

// const D1 = new Slider({ 
  
//   links:[
//       {
//           title:'Learn Java in very easy manner',
//           subTitle:'Java is one of th emost popular programming language',
//           imageUrl:'/static/images/s4.jpg'
//       },
//       {
//         title:'What is Django in Python?',
//         subTitle:'Django is most famous web framework of python programming',
//         imageUrl:'/static/images/s11.jpg'        
         
//       },
//       {
//         title:'What about node js?',
//         subTitle:'Node js is runtime environment to execute javascript outside browser',
//         imageUrl:'/static/images/s33.jpg'        
          
//       },
      
//   ]
// });

// D1.save();

