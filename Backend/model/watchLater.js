var mongoose = require('mongoose');

const WatchLaterSchema = new mongoose.Schema({
    videostreamid:{
      type:String,
      required:"videoid is mandatory",
    },
    userId:{
      type:String,
      required:"user id is mandaory",
      unique:false,    },
    title:{
      type:String,
      required:'title required',
          }, 
    url:{
      type:String,
      required:"Url is mandatory",
            },
    releaseDate:{
    type:String,
    required:"release date cant be empty"
    },


}, {
  // Make Mongoose use Unix time (seconds since Jan 1, 1970)
  timestamps:true
});


const WatchLater = mongoose.model('watchLater', WatchLaterSchema);

module.exports = { WatchLater }
