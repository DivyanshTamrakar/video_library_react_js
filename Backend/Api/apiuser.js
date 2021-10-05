var express = require("express");
var router = express.Router();
var { User } = require("../model/UserModel.js");
var { extend } = require("lodash");
var bodyparser = require("body-parser");
router.use(bodyparser.json());

router.route("/signup").post(async (req, res) => {
  try {
    let { name, email, password, mobile } = req.body;
    const check = await User.findOne({ email });
    if (check) {
      return res.json({ success: false, message: "Email already exist" });
    } else {
      const data = new User({ name, email, password, mobile });
      const result = await data.save(); //
      res.json({
        success: true,
        message: "You have registered successfully",
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

router.route("/signin").post(async (req, res) => {
  const { email, password } = req.body;

  try {
    const email = await User.findOne({ email: req.body.email });
    const password = await User.findOne({ password: req.body.password });

    if (email) {
      if (password) {
        return res.status(200).json({
          success: true,
          message: "Success Login !",
          user: {
            name: email.name,
            email: email.email,
            uid: email._id,
          },
        });
      } else {
        return res.json({ success: false, message: "Incorrect password" });
      }
    }

    res.json({
      success: false,
      message: "Email address is not registered, Register first and then try",
    });
  } catch (error) {
    if (error) {
      res.status(404).json({
        success: false,
        message: "Something went wrong with server",
        error: `${error}`,
      });
    }
  }
});

module.exports = router;
