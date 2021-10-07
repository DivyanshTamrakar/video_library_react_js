var express = require("express");
var router = express.Router();
var { WatchLater } = require("../model/watchLater.js");
var { extend } = require("lodash");
var bodyparser = require("body-parser");

router.use(bodyparser.json());

router.route("/").post(async (req, res) => {
  const body = req.body;
  WatchLater.exists({ videostreamid: body.videostreamid, userId: body.userId },
    async function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        if (doc === true) {
          return res.json({
            success: false,
            message: "Already in cart",
            available: doc,
          });
        } else {
          try {
            const data = new WatchLater(body);
            const result = await data.save();
            res.json({
              success: true,
              message: "Video added successfully to WatchLater!",
              available: doc,
            });
          } catch (e) {
            res.json({
              success: false,
              message: "Something is wrong ",
              error: `${e}`,
            });
          }
        }
      }
    }
  );
});

router.route("/:userId").get(async (req, res) => {
  const userId = req.params;
  try {
    const video = await WatchLater.find(userId);
    if (video.length === 0) {
      return res.json({
        success: false,
        message: "Cant find your Video",
        video: [],
      });
    }
    return res.status(200).json({
      success: true,
      message: "Video Found!",
      video: video,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Cant find your video Catch We got",
    });
  }
});
module.exports = router;
