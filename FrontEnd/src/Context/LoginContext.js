import { createContext, useContext, useState } from "react";
import { postData } from "../Utils/fetchApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export function AuthProvieder({ children }) {
  const [login, setlogin] = useState(false);
  const userId = localStorage.getItem("userId");

  function check() {
    if (userId !== null) {
      setlogin(true);
    }
  }

  async function LoginWithCredential(email, password) {
    const body = {
      email: email,
      password: password,
    };
    try {
      let response = await postData(body, "/users/signin");
      console.log(response);
      if (response["success"] === true) {
        setlogin(true);
        localStorage.setItem("userId", response["user"]["uid"]);
        localStorage.setItem("name", response["user"]["name"]);
        toast.success(response.message);
      } else {
        return toast.error(response.message);
      }
    } catch (e) {
      console.error("Error in AuhtContext ", e);
    }
  }

  function Logouthandler() {
    setlogin(false);
    localStorage.clear();
    toast.success("Successfull Logout!");
  }
  return (
    <AuthContext.Provider
      value={{ login, LoginWithCredential, setlogin, check ,Logouthandler}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
