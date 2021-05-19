import React from "react";
import SignUpForm from "../LoginForm/SignUpForm";
import { Toast } from "../Utils/Toast";


export default function Signup(){
    return (
    <div className="LoginFrame">
    {  <SignUpForm/> }
    <div>
    {Toast()}
    </div>
    </div>
       
        );
}