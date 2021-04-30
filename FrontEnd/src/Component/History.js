import React from 'react'
import ReactPlayer from 'react-player'

import { useHistory } from '../Context/HistoryContext'
export default function History(){
    
  const {itemInhistoy,setIteminhistory,} = useHistory();
//   console.log(itemInhistoy);

    return(
<div>
    
<div className="WatcLaterFrame">
           {
           itemInhistoy.map(function(item){
                   return(
                        <div className="Card">
                        <span>
                        <ReactPlayer url="https://youtu.be/7_zMZ4W6kTQ" width="258px" height="145px"/>
                        </span>
                        <div className="title">
                        {<img className="roundedAvatar"  src={item.avatar} height="30px" width="30px"/> }
                        {item.name}
                        </div>
                        {/* <div onClick={()=>handler(item)}
                        className="watchlater cursor">
                          Remove From Watch Later 
                        </div> */}
                        </div>


                       
                   );
               })
           }
    
        

        </div>
    
</div>

        );
}