import { useAuth } from "../Context/LoginContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { Toast } from "../Utils/Toast";
import { submitStyle } from "../Component/LoginForm/LoginDesign";
import SignInForm from "../Component/LoginForm/SignInForm";

export default function Login() {
  const { login, setlogin, check } = useAuth();
  // const { state } = useLocation();
  // const navigate =  useNavigate();

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function Logouthandler() {
    setlogin(false);
    localStorage.clear();
    toast.success("Successfull Logout!");
  }

  return (
    <div className="LoginFrame">
      {login ? (
        <button onClick={Logouthandler} style={submitStyle}>
          Logout
        </button>
      ) : (
        <SignInForm />
      )}
      <div>{Toast()}</div>
    </div>
  );
}
