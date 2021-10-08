import React from "react";
import ReactPlayer from "react-player";


function WatchLaterCard({_id,videostreamid,url,title,userId,releaseDate,}) {
  return (
    <div key={_id} className="Card">
      <span>
        <ReactPlayer url={url} width="258px" height="145px" />
      </span>
      {/* <div className="title">
                {<img className="roundedAvatar"  src={item.avatar} height="30px" width="30px"/> }
                {item.name}
                </div>
                <div onClick={()=>handler(item)}
                className="watchlater cursor">
                  Remove From Watch Later 
                </div> */}
    </div>
  );
}

export default WatchLaterCard;
