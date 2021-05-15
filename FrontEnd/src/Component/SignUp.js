import  {useAuth} from "../Context/LoginContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {appStyle,formStyle,inputStyle,labelStyle,submitStyle} from '../Utils/logindesign'
import { postData } from "../Utils/fetchApi";
const alignment = {
        textAlign:'left',
        marginLeft:'1.2rem'

};


export default function Signup(){
  
    const {login,setlogin} = useAuth();
    let email = "";
    let pass = "";
    let name = "";
    let mobile = "";

    async function ClickHandler(event){
        event.preventDefault();
        const body = {
            name:name,
            email :email, 
            password : pass,
            mobile:mobile
          }
          try{
            let response = await postData(body,'/users/signup');
            console.log(response);
            if(response['success'] === true){
            //  setlogin(true);
           //   localStorage.setItem('userId',response['user']['uid']);
           //   localStorage.setItem('name',response['user']['name']);
             return toast.success(response.message);
          }
          else{
              return toast.error(response.message);
          }
        }catch(e){
            console.error("Error in AuhtContext " , e);
          }
        
 }


    return (
    <div className="LoginFrame">
    {
        <div style={appStyle}> 
        <form style={formStyle} >

        <div style={alignment}><small ><b>Name:</b></small></div>
         <input  onChange={(text)=>{
                    name = text.target.value;
                 }} label="Username:" type="text" />
        <div style={alignment}><small ><b>Email:</b></small></div>
         <input  onChange={(text)=>{
                    email = text.target.value;
                 }} label="Username:" type="text" />
                 <div style={alignment}><small ><b>Password:</b></small></div>
         <input  onChange={(text)=>{
                     pass = text.target.value;
                 }} label="Password:" type="password" />
                 <div style={alignment}><small ><b>Mobile:</b></small></div>
         <input  onChange={(text)=>{
                    mobile = text.target.value;
                 }} label="Username:" type="number" />
         <div>
           <button onClick={ClickHandler} style={submitStyle} >Register</button>
         </div>

       <Link to='/login'>
       <div>
           <button style={submitStyle}>Already Registered !</button>
         </div>
       </Link>

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
    </div>
       
        );
}