import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData, getData } from "../../Utils/fetchApi";

export default function SimpleDialog({ setOpen,videoObjectId }) {
  const userid = localStorage.getItem("userId");
  const [playlistname, setplaylistname] = useState([]);
  const [click, setclick] = useState(false);
  const [name, setname] = useState("");
  const [up, setup] = useState(false);

  useEffect(() => {
    getUserPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click,up]);

  const getUserPlaylists = async () => {
    try {
      const response = await getData(`/playlist/${userid}`);
      if (response.success) {
        setplaylistname(response.playlists);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const AddPlaylist = async () => {
    if (name === "") {
      toast.error("playlist name cant be empty");
    } else {
      try {
        const response = await postData(
          { customerid: localStorage.getItem("userId"), playlistname: name },
          "/playlist/addtoplaylist"
        );
        if (response.success) {
          setname("");
          setclick(false);
          toast.success(response.message);
        } else {
          toast.warn(response.message);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleChange = async (e) => {
    const checked = e.target.checked;
    const checkedValue = e.target.value;
    if (checked) {
      try {
        const res = await postData(
          {
            individualplaylistId: checkedValue,
            userid: videoObjectId,
          },
          "/playlist/addVideoToPlaylist"
        );
        if (res.success) {
          setup(!up)
        }
      } catch (e) {
        console.error("Error in AuhtContext ", e);
      }
    } else {
      try {
        const res = await postData(
          {
            individualplaylistId: checkedValue,
            userid: videoObjectId,
          },
          "/playlist/removeVideoToPlaylist"
        );
        if (res.success) {
          setup(!up)
        }
      } catch (e) {
        console.error("Error in AuhtContext ", e);
      }
    }
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
        {playlistname.length ? (
          <span>
            {playlistname.map((item, index) => {
              return (
                <div key={index} className="show-playlist">
                  <label className="items">{item.playlistname}</label>
                  <input
                    type="checkbox"
                    name="name"
                    id={item._id}
                    value={item._id}
                    onChange={handleChange}
                    checked={item.playlistItem.includes(videoObjectId)}
                  />
                </div>
              );
            })}
          </span>
        ) : (
          "You dont have any playlist"
        )}
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
