import React from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_item back_arrow">
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="navbar_item">
        <span className="navbar_title">ORDER INFORMATION</span>
      </div>
    </div>
  );
};

export default Navbar;
