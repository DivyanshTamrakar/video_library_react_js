import ReactPlayer from 'react-player';
import { useLocation, useParams } from 'react-router-dom';
export default function WatchVideo(){
    let { videoId } = useParams();
    let { state } = useLocation();
    let recomend = state.item.recommmend;
    console.log(recomend);
    return(
            <div className="WatchVideoPage">
           <div className="left-section">
           <ReactPlayer playing={true} url={`https://youtu.be/${videoId}`} controls={true} height="413px" width="729px"/>
            <small style={{color:"blue"}}>{state.item.hashtag}</small>
            <h2>{state.item.title}</h2>
            <span style={{display:'inline'}}>
            <small>{state.item.views} views</small>
            <small>•</small>
            <small>{state.item.releaseDate}</small>
            </span>
           </div>

         <div className="right-section">
         {
               recomend.map(function(item){
                   return (
                 <div class="chip">
                {item}
                  </div>);
               })
           }
         </div>
            </div>
        
    
        

    );
}