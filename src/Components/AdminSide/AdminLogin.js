import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";
import MainNavbar from "../MainNavbar";

const AdminLogin = () => {
  const navigate = useNavigate();
  const user = useRef(null);
  const pass = useRef(null);

  const sub = () => {
    const username = user.current.value;
    const password = pass.current.value;
    if (username === "minhaj" && password === "minhaj") {
      navigate("/adminHome");
    } else {  
      toast.error("Username or password is incorrect");
    }
  };
  return (
    <>
      <MainNavbar />
      <div className="login-container">
        <form className="login-form">
          <div className="login-content">
            <h3 className="login-title">Admin Login</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Username"
                required
                ref={user}
                defaultValue= "minhaj"
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="inputs form-control mt-1"
                placeholder="Enter Password"
                required
                ref={pass}
                defaultValue= "minhaj"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              {/* <button onClick={sub} type="submit" className="btn">
              Submit
            </button> */}
              <Button onClick={sub} type="submit" className="btn">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
