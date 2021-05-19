import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useAuth } from "../Context/LoginContext";
import { Link } from "react-router-dom";
import { getData } from '../Utils/fetchApi';




export default function Video(){
    const [videodata,setvideodata] = useState([]);
    const { check } =  useAuth();


    useEffect(()=>{
        getAllVideos();
    },[]);


    check();

    async function getAllVideos(){
        try{
            let response  = await getData('/videos');
            setvideodata(response.videos);

        }catch(e){
            console.error(e);
        }
    }

    return(
        <div className="GridFrame">
           {
               videodata.map(function(item){
                   console.log(item._id);
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
