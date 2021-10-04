var mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    videoid:{
      type:String,
      required:"videoid is mandatory",
      unique:true,
    },
    title:{
      type:String,
      required:'title required',
      unique:true
    }, 
    url:{
      type:String,
      required:"Url is mandatory",
      unique:true
      },
    hashtag:{
      type:String,
      required:false,
      },
    views:{
      type:Number,required:false},
    recommmend:{
      type:Array,
      required:false
    }, 
    releaseDate:{
    type:String,
    required:"release date cant be empty"
    },
    avatar:{
      type:String,
      required:false
    },

}, {
  // Make Mongoose use Unix time (seconds since Jan 1, 1970)
  timestamps:true
});


const Videos = mongoose.model('videos', VideoSchema);

module.exports = { Videos }
