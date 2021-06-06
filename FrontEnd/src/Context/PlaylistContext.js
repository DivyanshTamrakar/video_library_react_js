import { createContext, useContext } from "react";
import {  useState } from "react";


export const  PlaylistContext = createContext();



export function PlaylistProvider({children}){
  const [modal,setmodal] = useState(false);

   return(
    <PlaylistContext.Provider value ={{modal,setmodal}}>
    {children}
   </PlaylistContext.Provider>
 );

}


export function usePlaylist(){

  return  useContext(PlaylistContext);
}


