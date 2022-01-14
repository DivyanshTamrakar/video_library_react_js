var express = require("express");
var router = express.Router();
var { Playlist } = require("../model/Playlist");
var { extend } = require("lodash");
var bodyparser = require("body-parser");
router.use(bodyparser.json());

router.route("/addtoplaylist").post(async (req, res) => {
  try {
    const { userId, playlistname } = req.body;

    console.log(req.body);
    const check = await Playlist.findOne({ "userId": userId,"playlistname":playlistname });
    console.log(check);
    if (check) {
      return res.json({ success: false, message: "Playlist name with this userId is found" });
    } else {
      const data = new Playlist({ userId, playlistname });
      const result = await data.save(); //
      res.json({
        success: true,
        message: "Playlist creatd ",
      });
    }
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong while creating user ",
      error: `${e}`,
    });
  }
});

module.exports = router;
