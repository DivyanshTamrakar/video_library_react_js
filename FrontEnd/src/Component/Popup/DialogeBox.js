import { Button } from "@mui/material";
import React from "react";

export default function SimpleDialog() {
  const playlistname = ["New Songs", "Old Songs", "Lyrical"];
  return (
    <div className="centerdiv">
      <h3>Add To Playlist</h3>
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
