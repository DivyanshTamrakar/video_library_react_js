import { createContext, useContext, useState } from "react";

export const WatchLater =  createContext();

export function WatchLaterProvider({children}){
const [itemInlater,setIteminlater] = useState([]);
return (
<WatchLater.Provider value={{itemInlater,setIteminlater}}>
    {children}
</WatchLater.Provider>    

);
}

export function useWatch(){

    return useContext(WatchLater);


}