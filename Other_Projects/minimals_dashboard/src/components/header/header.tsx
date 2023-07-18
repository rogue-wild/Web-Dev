import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import userIcon from "../../assets/user.png";
import settingsIcon from "../../assets/settings.png";
import logo from "../../assets/twitter.png";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.559);
  padding: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 3px 3px rgba(226, 226, 226, 0.576);
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000;
  float: right;
  margin-right: 2rem;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: -0.5rem 0rem;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin: -0.5rem 0rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="logo" />
      <HeaderLink to="/">
        <Icon src={userIcon} alt="user" />
      </HeaderLink>
      <HeaderLink to="/settings">
        <Icon src={settingsIcon} alt="settings" />
      </HeaderLink>
    </HeaderWrapper>
  );
};

export default Header;
