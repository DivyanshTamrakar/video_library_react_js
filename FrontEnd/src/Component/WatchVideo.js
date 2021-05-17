import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { getData} from "../Utils/fetchApi";
import { useParams,Link } from 'react-router-dom';
import { useHistory } from '../Context/HistoryContext';
import { arr } from "../Utils/dataArray";


export default function WatchVideo(){
    let { videoId } = useParams();
    const [result,setresult] = useState([]);
    const [recommend,setrecommend] = useState([]);
    const {itemInhistoy,setIteminhistory,} = useHistory();



    
    useEffect(()=>{
      getAllVideos();
      
  },[]);


  async function getAllVideos(){
      try{
          let response  = await getData(`/videos/${videoId}`);
          setresult(response.video);
          setrecommend(response.video.recommmend)

      }catch(e){
          console.error(e);
      }
  }
    
    // // Add this data to history context
    // useEffect(()=>{
    //   setIteminhistory([...itemInhistoy,result]);
    //   console.log(itemInhistoy.length);
    // },[]);
  



      




    return(
            <div className="WatchVideoPage">
           <div className="left-section">
           <ReactPlayer playing={true} url={`https://youtu.be/${videoId}`} controls={true} height="413px" width="729px"/>
            <small style={{color:"rgb(54,139,188)"}}>{result.hashtag}</small>
            <h2>{result.title}</h2>
            <span style={{display:'inline'}}>
            <small><b>{result.views} views</b></small>
            <small> • </small>
            <small><b>{result.releaseDate}</b></small>
            </span>
           </div>

         <div className="right-section">


         {recommend.map(function(item){ return (
       <div class="chip"> {item} </div>
         ); })}
  
  
  
  
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