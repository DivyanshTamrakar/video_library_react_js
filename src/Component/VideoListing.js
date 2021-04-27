import { useState } from "react";
import React from 'react'
import ReactPlayer from 'react-player'
import { arr } from "./dataArray";
import { useWatch } from "../Context/WatchlaterContext";
import { useHistory } from '../Context/HistoryContext'




export default function Video(){
    const [watchlater,setwatchlater] = useState(false);
    const {itemInlater,setIteminlater} = useWatch();
    const {itemInhistoy,setIteminhistory,} = useHistory();
    
    function handler(item){
        // setwatchlater(!watchlater);
        setIteminlater([...itemInlater,item]);
    }
    function historyhandler(item){
    
    console.log(item.id);
    
    }
    
    return(
        <div className="GridFrame">
           {
           arr.map(function(item){
                   return(
                        <div className="Card">
                        <span>
                        <ReactPlayer onClick={()=>historyhandler(item)} url="https://youtu.be/7_zMZ4W6kTQ" width="258px" height="145px"/>
                        </span>
                        <div className="title">
                        {<img className="roundedAvatar"  src={item.avatar} height="30px" width="30px"/> }
                        {item.name}
                        </div>
                        <div onClick={()=>handler(item)}
                            className="watchlater cursor">
                             Add To Watch later
                            </div>
                        </div>


                       
                   );
               })
           }
    
        

        </div>
    );
}
