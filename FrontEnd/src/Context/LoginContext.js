import axios from "axios";
import { createContext, useContext, useState } from "react";
import { postData,getData } from "../AxiosCall/fetchApi";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export function AuthProvieder({children}){

    const [login,setlogin] = useState(false);

    
    async function LoginWithCredential(email, password){
        const body = {
         email :email, 
         password : password,
       }
       try{
         let response = await postData(body,'/users/signin');
         console.log(response);
         if(response['success'] === true){
          setlogin(true);
          localStorage.setItem('userId',response['user']['uid']);
          localStorage.setItem('name',response['user']['name']);
          toast.success(response.message);
       }
       else{
           return toast.error(response.message);
       }
     }catch(e){
         console.error("Error in AuhtContext " , e);
       }
       }

    return (
    <AuthContext.Provider value = {{login,LoginWithCredential,setlogin}}>
        {children}
    </AuthContext.Provider>
    );
}



export function useAuth(){
   return useContext(AuthContext);
}




