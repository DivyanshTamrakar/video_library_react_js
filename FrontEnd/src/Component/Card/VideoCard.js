import React from "react";
import "./Card.css";
import ReactPlayer from "react-player";
function VideoCard({ url, title, avatar, videoid, id }) {
  return (
    <div>
      <span>
        <ReactPlayer url={url} light={true} width="max-width" height="150px" />
      </span>
      <div className="title">
        {
          <img
            className="roundedAvatar"
            alt={"avatar"}
            src={avatar}
            height="30px"
            width="30px"
          />
        }
        {title}
      </div>
    </div>
  );
}

export default VideoCard;
