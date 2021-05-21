import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from "../Utils/Toast";
import ReactPlayer from 'react-player';
import { getData,postData} from "../Utils/fetchApi";
import { useParams,Link } from 'react-router-dom';
import { useHistory } from '../Context/HistoryContext';
import { arr } from "../Utils/dataArray";
import { faThumbsUp,faThumbsDown, faClock,faPlusSquare,faCheck } from '@fortawesome/free-solid-svg-icons'
import { font } from '../Utils/FontAwesome';


export default function WatchVideo(){
    let { videoId } = useParams();
    const [watchlater,setwatchlater] = useState(false);
    const [result,setresult] = useState([]);
    const [recommend,setrecommend] = useState([]);
    const {itemInhistoy,setIteminhistory,} = useHistory();
    const userId = localStorage.getItem('userId');


    

    async function AddHandler(){
      const body = {
        videostreamid: result.videoid,
        userId:userId,
        title: result.title,
        url: result.url,
        releaseDate: result.releaseDate
      };
      try{
        let response = await postData(body,'/watchlater');
        if(response['success'] === true){
         setwatchlater(!watchlater);
         return toast.success(response.message);
      }
      else{
          return toast.error(response.message);
      }
    }catch(e){
        console.error("Error in AuhtContext " , e);
      }
        }
    // function Removehandler(){
    //   // setwatchlater(!watchlater);
    // }

    
    useEffect(()=>{
      getAllVideos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);


  async function getAllVideos(){
      try{
          let response  = await getData(`/videos/${videoId}`);
          setresult(response.video);
          setrecommend(response.video.recommmend)
          // Add this data to history context
          setIteminhistory([...itemInhistoy,response.video]);
      }catch(e){
          console.error(e);
      }
  }
    
    
    return(
            <div className="WatchVideoPage">
           <div className="left-section">
           <ReactPlayer playing={true} url={`https://youtu.be/${videoId}`} controls={true} height="413px" width="729px"/>
            <small style={{color:"rgb(54,139,188)"}}>{result.hashtag}</small>
            <h2>{result.title}</h2>

           <div className="info-bar">
              
           <div>
                    <span style={{display:'inline'}}>
                    <small><b>{result.views} views</b></small>
                    <small> • </small>
                    <small><b>{result.releaseDate}</b></small>
                    </span>
        
                   </div>

                   <div className="actions"> 
                   <span>{font(faThumbsUp)}</span>
                   <span>{font(faThumbsDown)}</span>
                   { watchlater ?  <span>{font(faCheck)}</span> : <span onClick={AddHandler}>{font(faClock)}</span> }
                   <span>{font(faPlusSquare)}</span>
        
                   </div>
        
           </div>


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
    
    <div>
   {Toast()}
    </div>
    
    
    
            </div>
        
    
        

    );
}