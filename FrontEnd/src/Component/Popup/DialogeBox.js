import { Button } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

export default function SimpleDialog() {
  const playlistname = ["New Songs", "Old Songs", "Lyrical"];
  return (
    <div className="centerdiv">
      <div className="dialogueHead">
       <div className="headtitle" > Add To Playlist</div>
        <div className="cancelIcon">
        <CancelIcon color="warning" />
        </div>
      </div>
      <hr className="mtb-10" />
      <div>
        <span>
          {playlistname.map((item) => {
            return (
              <div className="show-playlist">
                <div className="items">{item}</div>
                <input type="checkbox" />
              </div>
            );
          })}
        </span>
      </div>
      <Button sx={{ width: "100%", margin: "10px 0px" }} variant="contained">
        Create New Playlist
      </Button>
    </div>
  );
}
