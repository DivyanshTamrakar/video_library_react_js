import React from "react";
import SignUpForm from "../Component/Form/SignUpForm";
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
