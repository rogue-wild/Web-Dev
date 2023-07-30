// Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import settingsIcon from "../../assets/setting.png";
import { useTranslation } from "react-i18next";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
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
  cursor: pointer;
`;

const LangSwitchButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-weight: bold;
  float: right;
  margin-right: 1rem;
  cursor: pointer;
`;

const DropdownContent = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  position: absolute;
  top: 3rem;
  right: 1rem;
  background-color: #f9f9f9;
  min-width: 100px;
  border: 1px solid #ddd;
  border-radius: 4px;
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Header = ({ onLogout }: { onLogout: () => void }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <HeaderWrapper>
      <HeaderLink to="/">
        <ProfilePic
          alt="Jaydon Frankie"
          src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
          onClick={toggleDropdown}
        ></ProfilePic>
        {isDropdownVisible && (
          <DropdownContent isVisible={isDropdownVisible}>
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownContent>
        )}
      </HeaderLink>
      <HeaderLink to="/settings">
        <Icon src={settingsIcon} alt="settings" />
      </HeaderLink>
      <LangSwitchButton onClick={() => changeLanguage("en")}>EN</LangSwitchButton>
      <LangSwitchButton onClick={() => changeLanguage("es")}>ES</LangSwitchButton>
    </HeaderWrapper>
  );
};
