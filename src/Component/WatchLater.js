import React from 'react'
import { useWatch } from "../Context/WatchlaterContext";
import ReactPlayer from 'react-player'
export default function WatchLater(){
    const {itemInlater,setIteminlater} = useWatch();
    
    function handler(item){
        
    }




    return(
<div>
    
<div className="WatcLaterFrame">
           {
           itemInlater.map(function(item){
                   return(
                        <div className="Card">
                        <span>
                        <ReactPlayer url="https://youtu.be/7_zMZ4W6kTQ" width="258px" height="145px"/>
                        </span>
                        <div className="title">
                        {<img className="roundedAvatar"  src={item.avatar} height="30px" width="30px"/> }
                        {item.name}
                        </div>
                        <div onClick={()=>handler(item)}
                        className="watchlater cursor">
                          Remove From Watch Later 
                        </div>
                        </div>


                       
                   );
               })
           }
    
        

        </div>
    
</div>

        );
}