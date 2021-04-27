import { useWatch } from "../Context/WatchlaterContext";
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
                        <iframe width="258px" height="145px" src="https://www.youtube.com/embed/1k10z9mL7Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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