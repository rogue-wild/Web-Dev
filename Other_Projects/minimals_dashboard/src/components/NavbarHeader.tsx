// NavbarHeader.tsx
import React from "react";
import Navbar from "./navbar/navbar";
import { Header } from "./header/header";

interface NavbarHeaderProps {
  onLogout: () => void;
}

function NavbarHeader({ onLogout }: NavbarHeaderProps) {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="header">
        <Header onLogout={onLogout} />
      </div>
    </div>
  );
}

export default NavbarHeader;
