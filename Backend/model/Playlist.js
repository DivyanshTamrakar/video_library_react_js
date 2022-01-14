const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: "user id is mandaory",
      unique: false,
    },
    playlistname: {
      type: String,
      required: true,
      unique: false,
    },
    playlistItem: [{ type: mongoose.Schema.Types.ObjectId, ref: "Videos" }],
  },
  { timestamps: true }
);

const Playlist = mongoose.model("playlist", playlistSchema);
module.exports = { Playlist };
