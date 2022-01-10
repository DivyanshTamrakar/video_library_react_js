import { createContext, useContext } from "react";
import {  useState } from "react";


export const  HistoryContext = createContext();



export function HistoryContextProvider({children}){

  const [itemInhistoy,setIteminhistory] = useState([]);
   return(
    <HistoryContext.Provider value ={{itemInhistoy,setIteminhistory}}>
    {children}
   </HistoryContext.Provider>
 );

}


export function useHistory(){

  return  useContext(HistoryContext);
}


