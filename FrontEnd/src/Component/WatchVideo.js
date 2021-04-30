import ReactPlayer from 'react-player';
import { Routes, Route, useParams } from 'react-router-dom';
export default function WatchVideo(){
    let { videoId } = useParams();
    return(
        <div>
        <ReactPlayer playing={true} url={`https://youtu.be/${videoId}`} controls={true} height="413px" width="729px"/>
    
        

        </div>
    );
}