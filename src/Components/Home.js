import React from "react";

import "./Home.css";
import MainNavbar from "./MainNavbar";

function Home() {
  return (
    <>
      <MainNavbar />

      <div className="home">{/* <img className="home-bg" src={Logo}/> */}</div>
      <div className="heading">
        <h1 style={{ fontFamily: "'Arial', sans-serif" }}>
          NEW WAVE STREET
          <br /> CULTURE
        </h1>
        <button>Contact US</button>
        <button>Shop</button>
      </div>
    </>
  );
}

export default Home;
