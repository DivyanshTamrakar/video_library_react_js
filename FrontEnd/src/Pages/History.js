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
        {itemInhistoy.map(function (item) {
          return (
            <HistoryCard item={item}/>
          );
        })}
      </div>

      <div className="history-right"></div>
    </div>
  );
}
