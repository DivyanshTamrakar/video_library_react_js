import React, { useState } from "react";
import { usePlaylist } from "../../Context/PlaylistContext";
import "react-toastify/dist/ReactToastify.css";
import Model from "../Popup/ModelPopup";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";
import { postData } from "../../Utils/fetchApi";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router";

function PlayVideo({ videodata }) {
  const [watchlater, setwatchlater] = useState(videodata.watchlater);
  const [likes, setlikes] = useState(videodata.likes);
  const [dislikes, setdislikes] = useState(videodata.dislikes);
  const userId = localStorage.getItem("userId");
  const { modal, setmodal } = usePlaylist();
  const { login } = useAuth();
  const navigate = useNavigate();

  const addtoWatchlater = async () => {
    if (login) {
      const body = {
        videostreamid: videodata.videoid,
        userId: userId,
        title: videodata.title,
        url: videodata.url,
        releaseDate: videodata.releaseDate,
      };
      try {
        let response = await postData(body, "/watchlater");
        if (response.success) {
          console.log(response.message);
        } else {
          console.log(response.message);
        }
      } catch (e) {
        console.error("Error in AuhtContext ", e);
      }

      try {
        let response = await postData(
          { videoidDB: videodata._id, userid: userId },
          "/videos/add/watchlater"
        );
        if (response.success) {
          setwatchlater(response.result.watchlater);
          console.log(response.message);
        } else {
          console.log(response.message);
        }
      } catch (e) {
        console.error("Error in AuhtContext ", e);
      }
    } else {
      navigate("/login", { replace: true });
    }
  };

  const removefromWatchlater = async () => {
    try {
      let response = await postData(
        { videoidDB: videodata._id, userid: userId },
        "/videos/remove/watchlater"
      );

      if (response.success) {
        console.log(response.message);
        setwatchlater(response.result.watchlater);
      } else {
        console.log(response.message);
      }
    } catch (e) {
      console.error("Error in AuhtContext ", e);
    }
    try {
      let response = await postData(
        {
          videostreamid: videodata.videoid,
          userId: userId,
        },
        "/watchlater/remove"
      );
      if (response.success) {
        console.log(response.message);
      } else {
        console.log(response.message);
      }
    } catch (e) {
      console.error("Error in AuhtContext ", e);
    }
  };

  const addtoLike = async () => {
    if (login) {
      try {
        let response = await postData(
          { videoidDB: videodata._id, userid: userId },
          "/videos/like/video"
        );
        if (response.success) {
          setlikes(response.result.likes);
          setdislikes(response.result.dislikes);
        } else {
          console.log(response.message);
        }
      } catch (e) {
        console.error("Error in AuhtContext ", e);
      }
    } else {
      navigate("/login", { replace: true });
    }
  };

  const addtoDislike = async () => {
    if (login) {
      try {
        let response = await postData(
          { videoidDB: videodata._id, userid: userId },
          "/videos/dislike/video"
        );
        if (response.success) {
          setlikes(response.result.likes);
          setdislikes(response.result.dislikes);
        } else {
        }
      } catch (e) {
        console.error("Error in AuhtContext ", e);
      }
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div>
      <div className="player-wrapper">
        <ReactPlayer
          url={videodata.url}
          className="react-player"
          playing={false}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>

      <h6
        className="text-align-left pad-small"
        style={{ color: "rgb(54,139,188)" }}
      >
        {videodata.hashtag}
      </h6>
      <h2 className="text-align-left pad-small">{videodata.title}</h2>

      <div className="info-bar pad-small">
        <div>
          <span style={{ display: "inline" }}>
            <small>
              <b> 0 {videodata.views} views</b>
            </small>
            <small>
              {" "}
              <b>•</b>{" "}
            </small>
            <small>
              <b>{videodata.releaseDate}</b>
            </small>
          </span>
        </div>

        <div className="actions">
          <span style={{ fontWeight: "bolder" }}>{likes.length}</span>
          {likes.includes(userId) ? (
            <ThumbUpIcon sx={{ cursor: "pointer" }} />
          ) : (
            <ThumbUpOutlinedIcon
              onClick={addtoLike}
              sx={{ cursor: "pointer" }}
            />
          )}

          {dislikes.includes(userId) ? (
            <ThumbDownIcon sx={{ cursor: "pointer" }} />
          ) : (
            <ThumbDownOutlinedIcon
              onClick={addtoDislike}
              sx={{ cursor: "pointer" }}
            />
          )}

          {watchlater.includes(userId) ? (
            <CheckCircleIcon
              onClick={removefromWatchlater}
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <WatchLaterOutlinedIcon
              onClick={addtoWatchlater}
              sx={{ cursor: "pointer" }}
            />
          )}

          <span onClick={() => setmodal(!modal)}>
            <AddCircleOutlineOutlinedIcon sx={{ cursor: "pointer" }} />
          </span>
        </div>
      </div>

      {modal && <Model />}
    </div>
  );
}

export default PlayVideo;
