import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 30px 0;
  position: fixed;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  margin-top: -3rem;

  @media (max-width: 1046px) {
    margin-top: -9rem;
  }
`;

const NavbarButton = styled(Link)`
  text-decoration: none;
  color: #484848;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #d5ffe8;
    color: #006e32;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarButton to="/app">App</NavbarButton>
      <NavbarButton to="/">Profile</NavbarButton>
      <NavbarButton to="/about">About</NavbarButton>
      <NavbarButton to="/blogs">Blogs</NavbarButton>
    </NavbarWrapper>
  );
};

export default Navbar;
