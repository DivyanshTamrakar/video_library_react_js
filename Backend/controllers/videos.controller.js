const { Videos } = require("../model/allvideos.model.js");
const mongoose = require("mongoose");

const getAllVideos = async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json({
      success: true,
      message: "data fetch form database",
      videos: videos,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `${e}`,
    });
  }
};

const postVideos = async (req, res) => {
  try {
    const body = req.body;
    const data = new Videos(body);
    const result = await data.save(); //

    res.json({
      success: true,
      message: "Video added successfully!",
    });
  } catch (e) {
    console.log(e);
    res.json({
      success: false,
      message: "Something is wrong ",
      error: e,
    });
  }
};

const addToWatchLater = async (req, res) => {
  let { videoidDB, userid } = req.body;
  const id = mongoose.Types.ObjectId(userid);

  Videos.findByIdAndUpdate(
    { _id: videoidDB },
    { $push: { watchlater: id } },
    { new: true },
    function (err, docs) {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({
          success: true,
          message: "Data Updated Successfully",
          result: docs,
        });
      }
    }
  );
};

const removeFromWatchLater = async (req, res) => {
  let { videoidDB, userid } = req.body;
  const id = mongoose.Types.ObjectId(userid);

  Videos.findByIdAndUpdate(
    { _id: videoidDB },
    { $pull: { watchlater: id } },
    { new: true },
    function (err, docs) {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({
          success: true,
          message: "Data Updated Successfully",
          result: docs,
        });
      }
    }
  );
};

const likeVideo = async (req, res) => {
  let { videoidDB, userid } = req.body;
  const id = mongoose.Types.ObjectId(userid);

  Videos.findByIdAndUpdate(
    { _id: videoidDB },
    { $push: { likes: id }, $pull: { dislikes: id } },
    { new: true },
    function (err, docs) {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({
          success: true,
          message: "Data Updated Successfully",
          result: docs,
        });
      }
    }
  );
};

const dislikeVideo = async (req, res) => {
  let { videoidDB, userid } = req.body;
  const id = mongoose.Types.ObjectId(userid);

  Videos.findByIdAndUpdate(
    { _id: videoidDB },
    { $pull: { likes: id }, $push: { dislikes: id } },

    { new: true },
    function (err, docs) {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({
          success: true,
          message: "Data Updated Successfully",
          result: docs,
        });
      }
    }
  );
};

const viewCount = async (req, res) => {
  const videoid = req.body;
  try {
    const { views } = await Videos.findOne(videoid);
    Videos.findOneAndUpdate(
      videoid,
      { views: views + 1 },
      null,
      function (err, docs) {
        if (err) {
          res.json({
            success: false,
            message: "data upation fail",
            error: `${err}`,
          });
        } else {
          res.json({
            success: true,
            message: "Data Updated successfully ",
            doc: docs,
          });
        }
      }
    );
  } catch (error) {}
};

const getVideoDetail = async (req, res) => {
  const videoid = req.params;
  try {
    const video = await Videos.findOne(videoid);
    if (!video) {
      return res.status(400).json({
        success: false,
        message: "Cant find your Video",
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
};
const updateVideo = async (req, res) => {
  try {
    const productUpdate = req.body;
    let { product } = req;
    product = extend(product, productUpdate);
    product = await product.save();
    res.json({
      success: true,
      message: "Data Updated successfully ",
      product: product,
    });
  } catch (e) {
    res.json({
      success: false,
      message: "data upation fail",
      error: `${e}`,
    });
  }
};

module.exports = {
  postVideos,
  getAllVideos,
  addToWatchLater,
  removeFromWatchLater,
  likeVideo,
  dislikeVideo,
  viewCount,
  updateVideo,
  getVideoDetail,
};
