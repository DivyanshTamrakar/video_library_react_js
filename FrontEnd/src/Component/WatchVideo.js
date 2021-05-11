import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useParams,Link } from 'react-router-dom';
import { useHistory } from '../Context/HistoryContext';
import { arr } from "./dataArray";
export default function WatchVideo(){
    let { videoId } = useParams();
    const {itemInhistoy,setIteminhistory,} = useHistory();
    

    // find by videoId from data and the data is come from database not from stete which we used to do earlier .
    const result  = arr.find(element => element.videoid === videoId);
    let recomend = result.recommmend;
    
    // Add this data to history context
    useEffect(()=>{
      setIteminhistory([...itemInhistoy,result]);
      console.log(itemInhistoy.length);
    },[]);
  



      




    return(
            <div className="WatchVideoPage">
           <div className="left-section">
           <ReactPlayer playing={true} url={`https://youtu.be/${videoId}`} controls={true} height="413px" width="729px"/>
            <small style={{color:"rgb(54,139,188)"}}>{result.hashtag}</small>
            <h2>{result.title}</h2>
            <span style={{display:'inline'}}>
            <small>{result.views} views</small>
            <small>•</small>
            <small>{result.releaseDate}</small>
            </span>
           </div>

         <div className="right-section">
         {recomend.map(function(item){ return (<div class="chip"> {item} </div>); })}
  
         <div className="history-left-watch">

             <div style={{textAlign:"left"}}>
          </div>{


           arr.map(function(item){
                return(
                  <Link to={`/watch/${ item.videoid}`} >
                     <div key={item.id} className="history-card-watch">
                     <span>
                     <ReactPlayer url={`${item.url}`} width="150px" height="100px"/>
                     </span>
                     <div className="history-detail-watch">
                     {item.title}
                     </div>
                    
                     </div>
                     </Link>
                );
                
                
                })}</div>
         </div>
            </div>
        
    
        

    );
}