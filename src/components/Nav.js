import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixLogo from "./netflixLogo.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={netflixLogo}
          alt="netflix-logo"
          onClick={() => navigate("/")}
        />
        <img
          className="nav__icon"
          src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
          alt="user-icon"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
}

export default Nav;
