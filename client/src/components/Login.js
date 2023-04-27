import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail) {
      emailInputRef.current.value = storedEmail;
      passwordInputRef.current.value = storedPassword;
    }
    validateToken();
  }, []);
  const validateLogin = async () => {
    const formData = new FormData();
    formData.append("email", emailInputRef.current.value);
    formData.append("password", passwordInputRef.current.value);

    const response = await axios.post(
      "http://localhost:9999/validateLogin",
      formData
    );

    console.log(response.data);
    dispatch({ type: "login", value: response.data });
    if (response.data.isLoggedIn == true) {
      localStorage.setItem("email", emailInputRef.current.value);
      localStorage.setItem("password", passwordInputRef.current.value);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard", { state: response.data });
    } else {
      alert(response.data.msg);
    }
  };
  const validateToken = async () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    const response = await axios.post(
      "http://localhost:9999/validateToken",
      formData
    );
    dispatch({ type: "login", value: response.data });
    if (response.data.isLoggedIn == true) {
      // navigate("/dashboard",{state:response.data});
    } else {
      alert(response.data.msg);
    }
  };
  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input ref={emailInputRef}></input>
        </div>
        <div>
          <label>password</label>
          <input type="password" ref={passwordInputRef}></input>
        </div>
        <button
          type="button"
          onClick={() => {
            validateLogin();
          }}
        >
          Login{" "}
        </button>
      </form>
      <Link className="navigation" to="/signup">
        SignUp
      </Link>
      <Link className="navigation" to="/update">
        Update
      </Link>
      <Link className="navigation" to="/delete">
        Delete
      </Link>
    </div>
  );
}

export default Login;
