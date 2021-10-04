import React from "react";
import { useAuth } from "../../Context/LoginContext";
import { Link } from "react-router-dom";
import { appStyle, formStyle, submitStyle, alignment } from "./LoginDesign";

export default function SignInForm() {
  const { LoginWithCredential } = useAuth();
  let user = "";
  let pass = "";
  function ClickHandler(event) {
    event.preventDefault();
    LoginWithCredential(user, pass);

    // navigate(state?.from? state.from:'/login')
  }
  return (
    <div style={appStyle}>
      <form style={formStyle}>
        <div style={alignment}>
          <small>
            <b>Username:</b>
          </small>
        </div>
        <input
          onChange={(text) => {
            user = text.target.value;
          }}
          label="Username:"
          type="text"
        />
        <div style={alignment}>
          <small>
            <b>Password:</b>
          </small>
        </div>
        <input
          onChange={(text) => {
            pass = text.target.value;
          }}
          label="Password:"
          type="password"
        />
        <div>
          <button onClick={ClickHandler} style={submitStyle} type="submit">
            Login
          </button>
        </div>

        <div>
          <Link to="/signup">
            <button style={submitStyle}>Register Yourself</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
