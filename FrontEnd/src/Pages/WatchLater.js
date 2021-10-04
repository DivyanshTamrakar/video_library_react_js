import React, { useEffect, useState } from "react";
import { getData } from "../Utils/fetchApi";
import ReactPlayer from "react-player";

function WatchLater() {
  const [itemInlater, setIteminlater] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getWatchLaterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getWatchLaterData() {
    const response = await getData(`/watchlater/${userId}`);
    if (response.success === true) {
      const result = response.video;
      setIteminlater([...result]);
    } else {
      console.log("No Videos Found");
    }
  }

  // function handler(item){

  // }

  return (
    <div>
      <div className="WatcLaterFrame">
        {itemInlater.length !== 0 ? (
          itemInlater.map(function (item) {
            return (
              <div key={item._id} className="Card">
                <span>
                  <ReactPlayer url={item.url} width="258px" height="145px" />
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
          })
        ) : (
          <div style={{ marginTop: "5rem" }}>No Video In Watch Later </div>
        )}
      </div>
    </div>
  );
}
export default WatchLater;
