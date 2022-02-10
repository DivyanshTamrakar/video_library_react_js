var express = require("express");
var router = express.Router();
var bodyparser = require("body-parser");
const {
  WatchLaterHome,
  GetWatchlaterVideo,
  RemoveWatchLater,
} = require("../controllers/watchlater.controller.js");

router.use(bodyparser.json());

router.route("/").post(WatchLaterHome);

router.route("/:userId").get(GetWatchlaterVideo);

router.route("/remove").post(RemoveWatchLater);

module.exports = router;
