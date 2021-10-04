const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require("cors");
var { initializeConnection } = require("./connection/connectionDB");
var VideosApi = require("./allvideos.js");
var userApi = require("./apiuser.js");
var watchlaterApi = require("./watchlater.js");

app.use(cors());

initializeConnection(); // connect with mongodb via mongooose

app.use("/videos", VideosApi); // product from DB
app.use("/users", userApi); // user from DB
app.use("/watchlater", watchlaterApi); // user from DB

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(process.env.PORT || PORT, () => {
  console.log("server started");
});
