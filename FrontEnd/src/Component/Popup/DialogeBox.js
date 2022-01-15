import { Button } from "@mui/material";
import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function SimpleDialog({ setOpen }) {
  const [playlistname, setplaylistname] = useState([
    "Old Songs",
    "New Songs",
    "Lyrical",
  ]);
  const [click, setclick] = useState(false);
  const [name, setname] = useState("");

  const AddPlaylist = () => {
    setplaylistname([...playlistname, name]);
    setclick(false);
  };

  return (
    <div className="centerdiv">
      <div className="dialogueHead">
        <div className="headtitle"> Add To Playlist</div>
        <div className="cancelIcon">
          <CancelOutlinedIcon onClick={() => setOpen(false)} />
        </div>
      </div>
      <hr className="mtb-10" />
      <div>
        <span>
          {playlistname.map((item, index) => {
            return (
              <div key={index} className="show-playlist">
                <div className="items">{item}</div>
                <input type="checkbox" />
              </div>
            );
          })}
        </span>
      </div>
      {!click && (
        <Button
          sx={{ width: "100%", margin: "10px 0px" }}
          onClick={() => setclick(true)}
          variant="contained"
        >
          Create New Playlist
        </Button>
      )}

      {click && (
        <div className="text-align-left">
          <hr className="mtb-10" />
          <input
            className="playlist-name-input"
            type="text"
            placeholder="enter name"
            onChange={(e) => setname(e.target.value)}
          />
          <Button
            sx={{ width: "100%", margin: "10px 0px" }}
            variant="contained"
            onClick={AddPlaylist}
          >
            Create
          </Button>
        </div>
      )}
    </div>
  );
}
