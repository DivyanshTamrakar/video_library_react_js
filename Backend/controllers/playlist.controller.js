var { Playlist } = require("../model/playlist.model");

const customerPlaylist = async (req, res) => {
  const customerid = req.params;
  try {
    const playlists = await Playlist.find(customerid);
    return res.json({
      success: true,
      message: "Data fetched succesfully!",
      playlists,
    });
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong while creating user ",
      error: `${e}`,
    });
  }
};
const addToPlaylist = async (req, res) => {
  try {
    const { customerid, playlistname } = req.body;

    console.log(req.body);
    const check = await Playlist.findOne({
      customerid: customerid,
      playlistname: playlistname,
    });
    console.log(check);
    if (check) {
      return res.json({
        success: false,
        message: `you already have ${playlistname}`,
      });
    } else {
      const data = new Playlist({ customerid, playlistname });
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
};

module.exports = { customerPlaylist, addToPlaylist };
