var mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    videoid: {
      type: String,
      required: "videoid is mandatory",
      unique: true,
    },
    title: {
      type: String,
      required: "title required",
      unique: true,
    },
    url: {
      type: String,
      required: "Url is mandatory",
      unique: true,
    },
    hashtag: {
      type: String,
      required: false,
    },

    recommmend: {
      type: Array,
      required: false,
    },
    releaseDate: {
      type: String,
      required: "release date cant be empty",
    },
    watchlater: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    views: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    avatar: {
      type: String,
      required: false,
    },
  },
  {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true,
  }
);

const Videos = mongoose.model("videos", VideoSchema);

module.exports = { Videos };
