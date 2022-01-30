const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const {
  postVideos,
  getAllVideos,
  addToWatchLater,
  removeFromWatchLater,
  likeVideo,
  dislikeVideo,
  viewCount,
  updateVideo,
  getVideoDetail,
} = require("../controllers/videos");

router.use(bodyparser.json());

router.route("/").get(getAllVideos).post(postVideos);

router.route("/:videoid").get(getVideoDetail).post(updateVideo);

router.route("/add/watchlater").post(addToWatchLater);

router.route("/remove/watchlater").post(removeFromWatchLater);

router.route("/like/video").post(likeVideo);

router.route("/dislike/video").post(dislikeVideo);

router.route("/count/videoview").post(viewCount);

module.exports = router;
