import React from 'react'
import ReactPlayer from 'react-player'

import { useHistory } from '../Context/HistoryContext'
export default function History(){
    
  const {itemInhistoy} = useHistory();
 return(
<div  className="HistoryFrame">
<div className="history-left">

   <div style={{textAlign:"left"}}>
     <b>Watch History</b>
   </div>{ itemInhistoy.map(function(item){
                   return(
                        <div key={item.id} className="history-card">
                        <span>
                        <ReactPlayer url={`${item.url}`} width="258px" height="145px"/>
                        </span>
                        <div className="history-detail">
                        {item.title}
                        </div>
                       
                        </div>
                   ); })}</div>

        <div className="history-right"></div>
    
</div>

        );
}