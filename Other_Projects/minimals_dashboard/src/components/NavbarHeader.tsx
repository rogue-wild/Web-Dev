// NavbarHeader.js
import React from "react";
import Navbar from "./navbar/navbar";
import Header from "./header/header";

function NavbarHeader() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="header">
        <Header />
      </div>
    </div>
  );
}

export default NavbarHeader;
