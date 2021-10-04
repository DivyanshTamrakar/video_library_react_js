import { appStyle, formStyle, submitStyle, alignment } from "./LoginDesign";
import { postData } from "../../Utils/fetchApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUpForm() {
  let email = "";
  let pass = "";
  let name = "";
  let mobile = "";

  function ClickHandler(event) {
    event.preventDefault();
    RegisterUser();
  }

  async function RegisterUser() {
    const body = {
      name: name,
      email: email,
      password: pass,
      mobile: mobile,
    };
    try {
      let response = await postData(body, "/users/signup");
      console.log(response);
      if (response["success"] === true) {
        return toast.success(response.message);
      } else {
        return toast.error(response.message);
      }
    } catch (e) {
      console.error("Error in AuhtContext ", e);
    }
  }

  return (
    <div style={appStyle}>
      <form style={formStyle}>
        <div style={alignment}>
          <small>
            <b>Name:</b>
          </small>
        </div>
        <input
          onChange={(text) => {
            name = text.target.value;
          }}
          label="Username:"
          type="text"
        />
        <div style={alignment}>
          <small>
            <b>Email:</b>
          </small>
        </div>
        <input
          onChange={(text) => {
            email = text.target.value;
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
        <div style={alignment}>
          <small>
            <b>Mobile:</b>
          </small>
        </div>
        <input
          onChange={(text) => {
            mobile = text.target.value;
          }}
          label="Username:"
          type="number"
        />
        <div>
          <button onClick={ClickHandler} style={submitStyle}>
            Register
          </button>
        </div>

        <Link to="/login">
          <div>
            <button style={submitStyle}>Already Registered !</button>
          </div>
        </Link>
      </form>
    </div>
  );
}
