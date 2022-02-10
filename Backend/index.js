const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const { initializeConnection } = require("./connection/connectionDB");
const videosApi = require("./routes/allvideos.routes.js");
const userApi = require("./routes/apiuser.routes.js");
const watchlaterApi = require("./routes/watchlater.routes.js");
const playlistApi = require("./routes/playlist.routes.js");

app.use(cors());

initializeConnection(); // connect with mongodb via mongooose

app.use("/videos", videosApi); // product from DB
app.use("/users", userApi); // user from DB
app.use("/watchlater", watchlaterApi); // user from DB
app.use("/playlist", playlistApi);

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server started on Port: ${PORT}`);
});
