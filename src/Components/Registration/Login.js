import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Data } from "../../Main";
import { toast } from "react-hot-toast";
import MainNavbar from "../MainNavbar";

import "./Login.css";
import { Button } from "react-bootstrap";

function Login() {
  const { userData, setLogin, setLoginUser, loginUser } = useContext(Data);
  const navigate = useNavigate();
  const user = useRef();
  const pass = useRef();

  const logins = (e) => {
    e.preventDefault();

    const username = user.current.value;
    const password = pass.current.value;

    const currenduser = userData.find((item) => item.userName === username);
    const currendpass = userData.find((item) => item.password === password);

    if (currenduser && currendpass) {
      setLogin(true);
      toast.success("Login successfully");
      navigate("/");
      setLoginUser(currenduser);
      setLoginUser(currendpass);
      console.log(loginUser);
    } else {
      toast.error("user not found");
    }
  };
  console.log(loginUser + "dfuidsf");

  return (
    <>
      <MainNavbar />

      <div className="login-container">
        <form className="login-form">
          <div className="login-content">
            <h3 className="login-title">Login</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Username"
                required
                defaultValue={"Minhaj"}
                
                ref={user}
              />
            </div>
            {/* <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Email"
                defaultValue={"minhaj@m.c"}
                required
              />
            </div> */}
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="inputs form-control mt-1"
                placeholder="Enter Password"
                required
                defaultValue={"1234567890"}
                ref={pass}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button onClick={logins}>Submit</Button>
            </div>
            <p className="forgot text-right mt-2">
              Not a member? <a onClick={()=>navigate("/signin")}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
