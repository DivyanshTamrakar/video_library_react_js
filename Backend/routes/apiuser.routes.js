var express = require("express");
var router = express.Router();
var bodyparser = require("body-parser");
const { SignUp, SignIn } = require("../controllers/users.controller.js");
router.use(bodyparser.json());

router.route("/signup").post(SignUp);

router.route("/signin").post(SignIn);

module.exports = router;
