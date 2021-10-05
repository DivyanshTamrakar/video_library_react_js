import React, { useState } from "react";
import { usePlaylist } from "../Context/PlaylistContext";
import "react-toastify/dist/ReactToastify.css";
import Model from "../Component/Popup/ModelPopup";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";
import { postData } from "../Utils/fetchApi";

function PlayVideo({ videodata }) {
  const [watchlater, setwatchlater] = useState(false);
  const userId = localStorage.getItem("userId");
  const { modal, setmodal } = usePlaylist();

  async function AddHandler() {
    const body = {
      videostreamid: videodata.videoid,
      userId: userId,
      title: videodata.title,
      url: videodata.url,
      releaseDate: videodata.releaseDate,
    };
    try {
      let response = await postData(body, "/watchlater");
      if (response["success"] === true) {
        setwatchlater(!watchlater);
        // toast.success(response.message);
        console.log(response.message);
      } else {
        // toast.error(response.message);
        console.log(response.message);
      }
    } catch (e) {
      console.error("Error in AuhtContext ", e);
    }
  }

  return (
    <div>
      <ReactPlayer
        playing={true}
        url={`https://youtu.be/${videodata.videoid}`}
        controls={true}
        height="413px"
        width="729px"
      />
      <small style={{ color: "rgb(54,139,188)" }}>{videodata.hashtag}</small>
      <h2>{videodata.title}</h2>

      <div className="info-bar">
        <div>
          <span style={{ display: "inline" }}>
            <small>
              <b>{videodata.views} views</b>
            </small>
            <small> • </small>
            <small>
              <b>{videodata.releaseDate}</b>
            </small>
          </span>
        </div>

        <div className="actions">
          <ThumbUpOutlinedIcon />
          <ThumbDownOutlinedIcon />
          {watchlater ? (
            <span>
              <CheckCircleIcon />
            </span>
          ) : (
            <span onClick={AddHandler}>
              <WatchLaterOutlinedIcon />
            </span>
          )}
          <span onClick={() => setmodal(!modal)}>
            <AddCircleOutlineOutlinedIcon />
          </span>
        </div>
      </div>

      {modal ? <Model /> : <div></div>}
    </div>
  );
}

export default PlayVideo;
