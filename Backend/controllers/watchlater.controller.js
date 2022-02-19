var { WatchLater } = require("../model/watchLater.model.js");

const WatchLaterHome = async (req, res) => {
  const body = req.body;
  WatchLater.exists(
    { videostreamid: body.videostreamid, userId: body.userId },
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
};

const GetWatchlaterVideo = async (req, res) => {
  const userId = req.params;
  try {
    const video = await WatchLater.find(userId);
    res.status(200).json({
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
};

const RemoveWatchLater = async (req, res) => {
  const { videostreamid, userId } = req.body;
  WatchLater.findOneAndDelete({ videostreamid: videostreamid, userId: userId })
    .then(function () {
      res.status(200).json({
        success: true,
        message: "Data Successfully Deleted!",
      });
    })
    .catch(function (error) {
      res.status(400).json({
        success: false,
        message: "Something Went Wrong !",
        error: error,
      });
    });
};
module.exports = { WatchLaterHome, GetWatchlaterVideo, RemoveWatchLater };
