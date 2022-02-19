import React from "react";

import HistoryCard from "../Component/Card/HistoryCard";

import { useHistory } from "../Context/HistoryContext";
export default function History() {
  const { itemInhistoy } = useHistory();
  return (
    <div className="HistoryFrame adjust">
      <div>
        <div>
          <b>Watch History</b>
        </div>
        {
          itemInhistoy.length> 0 ? 
          itemInhistoy.map(function (item) {
            return (
              <HistoryCard item={item}/>
            );
          })
          :
          <div className="noData">No watch history found!</div>
        }
      </div>

      <div className="history-right"></div>
    </div>
  );
}
