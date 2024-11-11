import React from "react";
import "./App.css";

// react rounting cdn
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";




// import './index.css'

export default function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
       
        </Routes>
      </Router>
    </div>
  );
}