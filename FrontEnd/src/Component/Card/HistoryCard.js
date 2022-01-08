import React from "react";
import ReactPlayer from "react-player";

function HistoryCard({item}) {
  return (
    <div key={item._id} className="history-card">
      <span>
        <ReactPlayer url={item.url} width="max-width" height="150px" />
      </span>
      <div className="history-detail">{item.title}</div>
    </div>
  );
}

export default HistoryCard;
