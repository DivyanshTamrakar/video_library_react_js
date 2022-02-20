import React from "react";
import "./playlist_item.css";

function ShowPlaylists({ playlists }) {
  return (
    <div className="GridFrame">
      {playlists.map((item) => (
        <div className="playlist-item cursor" key={item._id}>
          <div>{item?.playlistname}</div>
          <div>{item.playlistItem.length} Videos</div>
        </div>
      ))}
    </div>
  );
}

export default ShowPlaylists;
