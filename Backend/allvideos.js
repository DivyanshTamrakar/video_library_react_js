var express = require('express');
var router = express.Router();
var { Videos } = require("./model/AllVideos.js");
var { extend } = require('lodash');
var bodyparser = require('body-parser');



router.use(bodyparser.json())



router.route('/').
get(async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json({
      success: true,
      message: "data fetch form database",
      videos:videos
      
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `${e}`
    })
  }
}).
post(async (req, res) => {
  try {
     const body = req.body
    const data = new Videos(body);
    const result = await data.save(); // 
     
    res.json({
      success: true,
      message: "Video added successfully!",
    })
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong ",
      error:`${e}`
    })

  }
})



// router.param("videoId",async (req,res,next,videoId)=>{
//   try{
//   const video = await Videos.findOne({videoId:videoId});
//   console.log(video);
//   if(!video){
//     return res.status(400).json({
//       success:false,
//       message:"Cant find your Video",
//     })
//   }
//   req.video = video;


//   }catch(e){
//     res.status(400).json({
//       success:false,
//       message:"Cant find your video Catch We got",
//     })
    
//   }
//  next();
// })

router.route('/:videoid')
.get(async (req,res)=>{
const videoid  = req.params
 try{
  const video = await Videos.findOne(videoid);
  if(!video){
    return res.status(400).json({
      success:false,
      message:"Cant find your Video",
    })
  }
return res.status(200).json({
      success:true,
      message:"Video Found!",
      video:video
    })


  }catch(e){
    res.status(400).json({
      success:false,
      message:"Cant find your video Catch We got",
    })
    
  }


  // res.json({
  //   success:true,
  //   message:"Video found",
  //   video:video

  // })
})
.post(async (req,res)=>{
   try{
     const productUpdate = req.body;
     let { product } = req;
   product = extend(product,productUpdate);
   product = await product.save();
    res.json({
    success:true,
    message:"Data Updated successfully ",
    product:product
    })
   }catch(e){
     res.json({
    success:false,
    message:"data upation fail",
    error:`${e}`
    })
   }

})




module.exports = router