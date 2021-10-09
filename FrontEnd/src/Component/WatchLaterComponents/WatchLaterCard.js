import React from "react";
import ReactPlayer from "react-player";
import DeleteIcon from '@mui/icons-material/Delete';

function WatchLaterCard({
  _id,
  videostreamid,
  url,
  title,
  userId,
  releaseDate,
}) {
  return (
    <div key={_id} >
      <span>
        <ReactPlayer url={url} width="max-width" height="150px" />
      </span>
      <div>{title}</div>
      <DeleteIcon className={"cursor"} />
    </div>
  );
}

export default WatchLaterCard;
