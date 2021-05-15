import  {useAuth} from "../Context/LoginContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate,useLocation  } from "react-router-dom";
import React, { useState } from "react";
 import {appStyle,formStyle,inputStyle,labelStyle,submitStyle} from '../Login_Form/logindesign'



export default function Login(){
  
    const {login,LoginWithCredential,setlogin} = useAuth();
    let user = "";
    let pass = "";
    const { state } = useLocation();
    const navigate =  useNavigate();

    function ClickHandler(event){
        event.preventDefault();
        LoginWithCredential(user,pass);
        navigate(state?.from? state.from:'/login')
 }

 function Logouthandler(){
    setlogin(false);
    localStorage.clear();
    toast.success("Successfull Logout!")
 }

    return (
    <>
    {
        login
        ? <button  onClick={Logouthandler}style={submitStyle}>Logout</button>
        :     <div style={appStyle}> 
        <form style={formStyle} >
            
         <input  onChange={(text)=>{
                    user = text.target.value;
                 }} label="Username:" type="text" />
         <input  onChange={(text)=>{
                     pass = text.target.value;
                 }} label="Password:" type="password" />
         <div>
           <button onClick={ClickHandler} style={submitStyle} type="submit">Login</button>
         </div>
       </form>
 </div>
        
    }
    <div>
    
    <ToastContainer
    position="bottom-center"
    autoClose={1000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </div>
    </>
       
        );
}