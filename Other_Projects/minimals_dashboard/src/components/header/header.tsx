import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import settingsIcon from "../../assets/setting.png";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.559);
  padding: 1.2rem 0rem 1rem 0rem;
  backdrop-filter: blur(10px);
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000;
  float: right;
  margin-right: 2rem;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin: -0.5rem 0rem;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spin 10s linear infinite;
`;

const ProfilePic = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  border: #eeeeee 2px solid;
  margin: -0.5rem 0rem;
 
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLink to="/">
      <ProfilePic
              alt="Jaydon Frankie"
              src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
            ></ProfilePic>
      </HeaderLink>
      <HeaderLink to="/settings">
        <Icon src={settingsIcon} alt="settings" />
      </HeaderLink>
    </HeaderWrapper>
  );
};

export default Header;
