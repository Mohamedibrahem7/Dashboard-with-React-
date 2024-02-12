import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../auth/authSlice";
import "./LoginPage.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    if (!email || !password) {
      toast.warning("Please Enter Email and Password");
      return false;
    }
    return true;
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(
          "https://android-training.appssquare.com/api/login",
          {
            method: "post",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          const token = data.token;
          localStorage.setItem("token", token);
          dispatch(loginUser({ email, token }));
          navigate("/");
        } else {
          toast.error(data.message || "Login Failed");
        }
      } catch (error) {
        toast.error("Login Failed due to:" + error.message);
      }
    }
  };

  return (
    <div className="page">
      <div className="form">
        <form action="" onSubmit={handelLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget password</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
