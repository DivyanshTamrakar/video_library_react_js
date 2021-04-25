import { useState } from "react";
import { arr } from "./dataArray";
import { useWatch } from "../Context/WatchlaterContext";



export default function Video(){
    const [watchlater,setwatchlater] = useState(false);
    const {itemInlater,setIteminlater} = useWatch();

    function handler(item){
        setwatchlater(!watchlater);
        setIteminlater([...itemInlater,item]);

        

    }
    return(
        <div className="GridFrame">
           {
           arr.map(function(item){
                   return(
                        <div className="Card">
                        <span>
                        <iframe width="258px" height="145px" src="https://www.youtube.com/embed/1k10z9mL7Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </span>
                        {/* {<img src={item.image} height="145px" width="258px"/> } */}
                        <div className="title">
                        {<img className="roundedAvatar"  src={item.avatar} height="30px" width="30px"/> }
                        {item.name}
                        </div>
                        <div onClick={()=>handler(item)}
                        className="watchlater cursor">
                            {
                         watchlater === true?"Remove from Watch later":"Add To Watch later"

                            }
                        </div>
                        </div>


                       
                   );
               })
           }
    
        

        </div>
    );
}
