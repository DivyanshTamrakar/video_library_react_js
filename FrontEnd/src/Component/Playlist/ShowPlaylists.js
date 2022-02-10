import React from "react";
import "./playlist_item.css";

function ShowPlaylists({ playlists }) {
  return (
    <div className="GridFrame">
      {playlists.map((item) => (
        <div className="playlist-item cursor" key={item._id}>
          <div>{item?.playlistname}</div>
          <div>0 Videos</div>
          <span className="playlistbutton">view-playlist</span>
        </div>
      ))}
    </div>
  );
}

export default ShowPlaylists;
