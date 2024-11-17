import React from "react";
import "./Navbar.css";

import logo from "../../../Assets/Img/logo.png";
import calenderimg from "../../../Assets/Img/calenderimg.svg";
import notifactionimg from "../../../Assets/Img/notifaction.svg";
import overviewimg from "../../../Assets/Img/overviewimg.svg";
import creditimg from "../../../Assets/Img/creditimg.svg";
import courseremimg from "../../../Assets/Img/courseremimg.svg";
import notiimg from "../../../Assets/Img/notiimg.svg";
import supportimg from "../../../Assets/Img/support.svg";
import heroimg from "../../../Assets/Img/heroimg.svg";


// rounting links

import {  useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate(); // Initialize the navigate function


  const gotheloginpage = () => {
    navigate("/login");
  }

  const gothesinguppage = () => {
    navigate("/signup");
  }

  return (
    <>
    <div className="bgcolordiv">
      <div className="loginandsignupmainparentbtndiv">
        <button onClick={gotheloginpage} >Login In</button>
        <button onClick={gothesinguppage}>Signup</button>

        <img className="iconr" src={calenderimg} alt="" />
        <img className="iconr" src={notifactionimg} alt="" />
      </div>

      <div className="logoandcategoriesmaindiv">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="maincategoriesdiv">
          <div className="imgandpmaindiv">
            <img src={overviewimg} alt="" />
            <p>My Overview </p>
          </div>

          <div className="imgandpmaindiv">
            <img src={creditimg} alt="" />
            <p>Course Search</p>
          </div>

          <div className="imgandpmaindiv">
            <img src={courseremimg} alt="" />
            <p>course recommendations.</p>
          </div>

          <div className="imgandpmaindiv">
            <img src={creditimg} alt="" />
            <p>Schedule</p>
          </div>

          <div className="imgandpmaindiv">
            <img src={notiimg} alt="" />
            <p>Notification</p>
          </div>

          <div className="imgandpmaindiv">
            <img src={supportimg} alt="" />
            <p>Support/Help </p>
          </div>
        </div>
      </div>

      <div className="herosection">
        <div>
          <h1>
            We Offer <br />
            You course <br />
            recomendation <br />
            system
          </h1>
        </div>

        <div>
          <img className="heroimg" src={heroimg} alt="" />
        </div>
      </div>


    </div>

    <div className="reviewcontentdiv">
      
    <div>
      <h1>10k+</h1>
      <h2>Student</h2>
    </div>
    <div>
      <h1>90%</h1>
      <h2>Quality courses</h2>
    </div>
    <div>
      <h1>4.4</h1>
      <h2>Rating Mentors</h2>
    </div>
    </div>

    </>
  );
}
