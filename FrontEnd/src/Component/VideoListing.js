import { useState } from "react";
import React from 'react'
import ReactPlayer from 'react-player'
import { arr } from "./dataArray";
import { useWatch } from "../Context/WatchlaterContext";
import { useHistory } from '../Context/HistoryContext'
import { Link } from "react-router-dom";




export default function Video(){
    const [watchlater,setwatchlater] = useState(false);
    const {itemInlater,setIteminlater} = useWatch();
    const {itemInhistoy,setIteminhistory,} = useHistory();
    
    function handler(item){
        // setwatchlater(!watchlater);
        setIteminlater([...itemInlater,item]);
    }
    
    return(
        <div className="GridFrame">
           {
               
           arr.map(function(item){
                   return(
                      <Link to={`/watch/${ item.videoid}`}>
                         <div key={item.id} className="Card">
                        <span>
                        <ReactPlayer url={item.url} light={true} width="258px" height="145px"/>
                        </span>
                        <div className="title">
                        {<img className="roundedAvatar"  src={item.avatar} height="30px" width="30px"/> }
                        {item.title}
                        </div>
                        {/* <div onClick={()=>handler(item)}
                            className="watchlater cursor">
                             Add To Watch later
                            </div> */}
                        </div>

                      
                      
                      
                      </Link>

                       
                   );
               })
           }
    
        

        </div>
    );
}
