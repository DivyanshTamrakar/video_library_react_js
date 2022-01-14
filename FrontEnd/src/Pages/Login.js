import { useAuth } from "../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { Toast } from "../Utils/Toast";
import SignInForm from "../Component/Form/SignInForm";

const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#3085d6",
  width: "100%",
  fontSize: "15px",
  color: "white",
  display: "block",
  cursor: "pointer",
};

export default function Login() {
  const { login, Logouthandler, check } = useAuth();
  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
