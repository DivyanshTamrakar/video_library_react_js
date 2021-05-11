import React from 'react'
import ReactPlayer from 'react-player'
import { arr } from "./dataArray";
import { Link } from "react-router-dom";




export default function Video(){
    return(
        <div className="GridFrame">
           {
               
               arr.map(function(item){
                   return(
                      <Link to={`/watch/${ item.videoid}`} >
                         <div key={item.id} className="Card">
                        <span>
                        <ReactPlayer url={item.url} light={true} width="258px" height="145px"/>
                        </span>
                        <div className="title">
                        {<img className="roundedAvatar"  src={item.avatar} height="30px" width="30px"/> }
                        {item.title}
                        </div>
                        </div>
                      </Link>

                       
                   );
               })
           }
    
        

        </div>
    );
}
