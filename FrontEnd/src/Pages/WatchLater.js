import React, { useEffect, useState } from "react";
import { getData } from "../Utils/fetchApi";

import WatchLaterCard from "../Component/WatchLaterComponents/WatchLaterCard";

function WatchLater() {
  const [iteminWatchlater, setiteminWatchlater] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getWatchLaterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWatchLaterData = async () => {
    try {
      const response = await getData(`/watchlater/${userId}`);
      if (response.success) {
        setiteminWatchlater(response.video);
      } else {
        console.log("No Videos Found");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {iteminWatchlater.length !== 0 ? (
        <div className="WatcLaterFrame adjust">
          <div style={{textAlign:'left',fontWeight:'900',fontSize:'2rem',margin:'15px 0px'}}>Watch Later</div>
          {iteminWatchlater.map(
            (
              { _id, url, videostreamid, title, releaseDate, userId },
              index
            ) => {
              return (
                <div key={index}>
                  {
                    <WatchLaterCard
                      _id={_id}
                      url={url}
                      videostreamid={videostreamid}
                      title={title}
                      releaseDate={releaseDate}
                      userId={userId}
                    />
                  }
                </div>
              );
            }
          )}
        </div>
      ) : (
        <div className="adjust">No Video Found</div>
      )}
    </div>
  );
}
export default WatchLater;
