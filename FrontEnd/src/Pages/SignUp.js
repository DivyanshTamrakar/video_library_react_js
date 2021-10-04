import React from "react";
import SignUpForm from "../Component/LoginForm/SignUpForm";
import { Toast } from "../Utils/Toast";

function Signup() {
  return (
    <div className="LoginFrame">
      <SignUpForm />
      <div>{Toast()}</div>
    </div>
  );
}
export default Signup;
