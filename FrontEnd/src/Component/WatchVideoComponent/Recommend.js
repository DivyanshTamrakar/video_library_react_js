import React from "react";
import ReactPlayer from "react-player";

function Recommend({ id, url, title }) {
  return (
    <div  className="history-card-watch">
      <span>
        <ReactPlayer url={`${url}`} width="150px" height="100px" />
      </span>
      <div style={{marginLeft:"1rem"}} className="history-detail-watch">{title}</div>
    </div>
  );
}

export default Recommend;
