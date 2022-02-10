var express = require("express");
var router = express.Router();
var bodyparser = require("body-parser");
const {
  customerPlaylist,
  addToPlaylist,
} = require("../controllers/playlist.controller");
router.use(bodyparser.json());

router.route("/:customerid").get(customerPlaylist);

router.route("/addtoplaylist").post(addToPlaylist);

module.exports = router;
