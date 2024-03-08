import React, { useContext, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../../Main";
import "./Signin.css";
import MainNavbar from "../MainNavbar";

function Signin() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(Data);
  const userNameRef = useRef(null);
  const emailIdRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmpasswordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(" ");

  const submit = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    // const emailId = emailIdRef.current.value;
    // const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;
    const confirmpassword = confirmpasswordRef.current.value;

    if (
      !username ||
      // !emailId ||
      // !phoneNumber ||
      !password ||
      !confirmpassword
    ) {
      setErrorMessage("Please fill out the form");
      return;
    }
    // const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    //   emailId
    // );
    // if (!isEmailValid) {
    //   setErrorMessage("Please enter a valid email id");
    //   return;
    // }
    // const isNumber = /^[0-9]{10}$/.test(phoneNumber);
    // if (!isNumber) {
    //   setErrorMessage("Please enter 10 digit number");
    //   return;
    // }
    if (password.length < 8) {
      setErrorMessage("Enter at least 8 characters for the password");
      return;
    }
    if (password !== confirmpassword) {
      setErrorMessage("Password did'nt match");
    }
    setErrorMessage("");
    const newUser = {
      userName: username,
      password: password,
      confirmpassword: confirmpassword,
      cart: [],
    };
    setUserData([...userData, newUser]);
    navigate("/login");
    console.log(newUser);
  };

  return (
    <>
      <MainNavbar />
      <div className="signin-container">
        <form className="signin-form">
          <div className="signin-content">
            <h3 className="signin-title">SignIn</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                ref={userNameRef}
                type="text"
                className="form-control mt-1"
                placeholder="Enter Username.."
                defaultValue={"Minhaj"}
                required
              />
            </div>
            {/* <div className="form-group mt-3">
              <label>Email</label>
              <input
                ref={emailIdRef}
                type="email"
                className="form-control mt-1"
                placeholder="Enter Email.. "
                required
              />
            </div> */}
            {/* <div className="mform-group mt-3">
              <label>Phone Number</label>
              <input
                ref={phoneNumberRef}
                type="phone"
                className="form-control mt-1"
                placeholder="Enter Phone number"
                required
              />
            </div> */}
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                ref={passwordRef}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                defaultValue={"1234567890"}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Re-enter Password</label>
              <input
                ref={confirmpasswordRef}
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
                defaultValue={"1234567890"}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <button
                onClick={submit}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
              <p className="forgot text-right mt-2">
                Already have an account{" "}
                <a onClick={() => navigate("/login")}>Login here</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
