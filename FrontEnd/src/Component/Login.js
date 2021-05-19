import  {useAuth} from "../Context/LoginContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate,useLocation, Link  } from "react-router-dom";
import React from "react";
import {Toast} from "../Utils/Toast"
 import {appStyle,formStyle,submitStyle} from '../Utils/logindesign'
 const alignment = {
  textAlign:'left',
  marginLeft:'1.2rem'

};


export default function Login(){
  
    const {login,LoginWithCredential,setlogin} = useAuth();
    let user = "";
    let pass = "";
    // const { state } = useLocation();
    // const navigate =  useNavigate();

    function ClickHandler(event){
        event.preventDefault();
         LoginWithCredential(user,pass);
        
        // navigate(state?.from? state.from:'/login')
 }

 function Logouthandler(){
    setlogin(false);
    localStorage.clear();
    toast.success("Successfull Logout!")
 }

    return (
    <div className="LoginFrame">
    {
        login
        ? <button  onClick={Logouthandler}style={submitStyle}>Logout</button>
        :     <div style={appStyle}> 
        <form style={formStyle} >
            
        <div style={alignment}><small ><b>Username:</b></small></div>
         <input  onChange={(text)=>{
                    user = text.target.value;
                 }} label="Username:" type="text" />
                 <div style={alignment}><small ><b>Password:</b></small></div>
         <input  onChange={(text)=>{
                     pass = text.target.value;
                 }} label="Password:" type="password" />
         <div>
           <button onClick={ClickHandler} style={submitStyle} type="submit">Login</button>
         </div>

         <div>
           <Link to="/signup"><button style={submitStyle}>Register Yourself</button></Link>
         </div>

       </form>
 </div>
        
    }
    <div>
    
    {Toast()}
    </div>
    </div>
       
        );
}