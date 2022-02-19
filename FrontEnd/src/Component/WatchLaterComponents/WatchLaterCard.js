import React from "react";
import ReactPlayer from "react-player";
import CancelIcon from "@mui/icons-material/Cancel";
import "./WatchLaterCard.css";
import { postData } from "../../Utils/fetchApi";

function WatchLaterCard({
  _id,
  videostreamid,
  url,
  title,
  userId,
  releaseDate,
  setupdateWatchLater,
  playvideoId
}) {
  

  const removefromWatchlater = async () => {
    try {
      await postData(
        { videoidDB: playvideoId, userid: userId },
        "/videos/remove/watchlater"
      );
    } catch (e) {
      console.error("Error in AuhtContext ", e);
    }
    try {
      const res = await postData(
        {
          videostreamid: videostreamid,
          userId: userId,
        },
        "/watchlater/remove"
      );
      if(res.success){
        setupdateWatchLater(true)
      }
    } catch (e) {
      console.error("Error in AuhtContext ", e);
    }
  };

  return (
    <div className="WatchLater">
      <ReactPlayer
        url={url}
        playing={false}
        height="auto"
        width="auto"
        controls={false}
      />

      <div className="title-later">{title}</div>
      <CancelIcon
        onClick={removefromWatchlater}
        className="cance-icon cursor"
      />
    </div>
  );
}

export default WatchLaterCard;
