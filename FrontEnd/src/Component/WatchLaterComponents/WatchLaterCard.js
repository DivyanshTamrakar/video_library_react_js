import React from "react";
import ReactPlayer from "react-player";
import CancelIcon from '@mui/icons-material/Cancel';
import "./WatchLaterCard.css";

function WatchLaterCard({
  _id,
  videostreamid,
  url,
  title,
  userId,
  releaseDate,
}) {
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
      <CancelIcon className="cance-icon cursor" />
    </div>
  );
}

export default WatchLaterCard;
