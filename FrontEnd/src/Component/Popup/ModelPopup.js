import { usePlaylist } from "../../Context/PlaylistContext";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { font } from "../../Utils/FontAwesome";
import { useState } from "react";

const inputBox = {
  border: "none",
  padding: "0.5rem",
  marginRight: "0.4rem",
};
const playlistArrayItem = {
  border: "1px solid white",
  borderRadius: "0.2rem",
  margin: "0.5rem",
  cursor: "pointer",
};

export default function Model() {
  const [create, setcreate] = useState(false);

  let { modal, setmodal, playlistArray, setlist } = usePlaylist();
  let playlistName;

  return (
    <div className="Modal">
      <div className="Modal-Content">
        <span className="close" onClick={() => setmodal(!modal)}>
          {font(faTimesCircle)}
        </span>
        <span>Save As....</span>
        <hr class="dashed"></hr>
        <div className="watch-later-section">
          <input style={{ marginTop: "0.4rem" }} type="checkbox" name="name" />
          <span>Watch Later</span>
        </div>

        {playlistArray.map(function (item) {
          return <div style={playlistArrayItem}>{item}</div>;
        })}

        {create ? (
          <span></span>
        ) : (
          <button
            onClick={() => {
              setcreate(!create);
            }}
            className="create-playlist"
          >
            Create New Playlist
          </button>
        )}

        {create ? (
          <div>
            <input
              style={inputBox}
              onChange={(text) => {
                playlistName = text.target.value;
              }}
              type="text"
              placeholder="Playslist Name"
            />
            <button
              onClick={() => {
                setcreate(!create);
                setlist([...playlistArray, playlistName]);
              }}
              className="create-playlist"
            >
              create
            </button>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
