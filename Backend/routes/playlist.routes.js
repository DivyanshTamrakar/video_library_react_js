var express = require("express");
var router = express.Router();
var bodyparser = require("body-parser");
const {
  customerPlaylist,
  addToPlaylist,
  addVideoToPlaylist,
  removeVideoToPlaylist
} = require("../controllers/playlist.controller");
router.use(bodyparser.json());

router.route("/:customerid").get(customerPlaylist);

router.route("/addtoplaylist").post(addToPlaylist);

router.route("/addVideoToPlaylist").post(addVideoToPlaylist);

router.route("/removeVideoToPlaylist").post(removeVideoToPlaylist);


module.exports = router;
