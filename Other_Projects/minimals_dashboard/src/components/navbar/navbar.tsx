import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import "./navbar.css";

const NavbarWrapper = styled.div`
  margin-top: -5rem;
  position: relative;
`;

const Overlay = styled.div<{ showOverlay: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent grey */
  z-index: 999; /* Make sure the overlay is above other elements */
  display: ${(props) => (props.showOverlay ? "block" : "none")};
`;
interface NavbarWrapInsideProps {
  showNavbarWrapInside: boolean;
}

const NavbarWrapInside = styled.div<NavbarWrapInsideProps>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem 0rem;
  position: fixed;
  border-right: 1px dashed rgba(0, 0, 0, 0.05);
  height: 100%;

  @media (max-width: 1100px) {
    display: ${(props) => (props.showNavbarWrapInside ? "flex" : "none")};
  }
`;

const NavbarButton = styled(Link)`
  text-decoration: none;
  color: #363636;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.7rem;
  line-height: 0.5rem;
  margin: 0.2rem;
  border-radius: 5px;
  &:hover {
    background-color: #e7e7e7;
    color: #595959;
  }
  &:focus {
    background-color: #d5ffe8;
    color: #006e32;
  }
`;

const Logo = styled.img`
  width: 3.5rem;
  margin: 1rem;
`;

const Menu = styled.svg`
  margin-top: 1rem;
  padding-top: 1rem;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.3rem 2rem 0.3rem 2rem;
  fill: #6f6f6f;
  @media (min-width: 1100px) {
    display: none;
  }
`;

const Toggle = styled.button`
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  padding-top: 1rem;
  border: none;
  @media (min-width: 1100px) {
    display: none;
  }
`;

const Icon = styled.svg`
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.3rem 2rem 0.3rem 2rem;
  padding-top: 0.2rem;
  fill: #878787;
  ${NavbarButton}:hover & {
    fill: #595959;
  }
  ${NavbarButton}:focus & {
    fill: #006e32;
  }
`;

const Navbar = () => {
  const [showNavbarWrapInside, setShowNavbarWrapInside] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleToggleNavbarWrapInside = () => {
    setShowNavbarWrapInside(!showNavbarWrapInside);
  };

  const handleOverlayClick = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setShowNavbarWrapInside(false); // Close the overlay when clicked outside the NavbarWrapInside
    }
  };

  useEffect(() => {
    // Function to handle the body scrolling
    const handleBodyScroll = () => {
      if (showNavbarWrapInside) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    // Add the event listener to handle body scrolling when the overlay is shown or hidden
    handleBodyScroll();

    // Attach the event listener on component mount and remove it on unmount
    document.addEventListener("click", handleOverlayClick);
    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [showNavbarWrapInside]);

  return (
    <NavbarWrapper>
      <Toggle onClick={handleToggleNavbarWrapInside}>
        {" "}
        <Menu
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M0,3.5c0-.83,.67-1.5,1.5-1.5H17.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5Zm17.5,14.5H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H17.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm5-8H6.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H22.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z" />
        </Menu>
      </Toggle>
      <Overlay
        className="target-element"
        showOverlay={showNavbarWrapInside}
        onClick={handleToggleNavbarWrapInside}
      />
      <NavbarWrapInside
        className="reference-element"
        showNavbarWrapInside={showNavbarWrapInside}
      >
        <Logo src={logo} alt="logo" />
        <NavbarButton to="/app">
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="512"
            height="512"
          >
            <g>
              <path d="M85.333,0h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,234.667,0,196.462,0,149.333v-64C0,38.205,38.205,0,85.333,0z" />
              <path d="M85.333,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,512,0,473.795,0,426.667v-64C0,315.538,38.205,277.333,85.333,277.333z" />
              <path d="M362.667,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64C512,473.795,473.795,512,426.667,512h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,315.538,315.538,277.333,362.667,277.333z" />
              <path d="M298.667,149.333h64v64c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333v-64h64   c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333h-64v-64c0-11.782-9.551-21.333-21.333-21.333   c-11.782,0-21.333,9.551-21.333,21.333v64h-64c-11.782,0-21.333,9.551-21.333,21.333S286.885,149.333,298.667,149.333z" />
            </g>
          </Icon>
          <p>App</p>
        </NavbarButton>
        <NavbarButton to="/bank">
          <Icon
            id="Layer_1"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
          >
            <path d="m.291 8.552a2.443 2.443 0 0 1 .153-2.566 4.716 4.716 0 0 1 1.668-1.5l7.501-3.904a5.174 5.174 0 0 1 4.774 0l7.5 3.907a4.716 4.716 0 0 1 1.668 1.5 2.443 2.443 0 0 1 .153 2.566 2.713 2.713 0 0 1 -2.416 1.445h-18.584a2.713 2.713 0 0 1 -2.417-1.448zm22.709 13.448a2 2 0 0 0 -2-2v-8h-2v8h-3v-8h-2v8h-4v-8h-2v8h-3v-8h-2v8a2 2 0 0 0 -2 2 1 1 0 0 0 0 2h22a1 1 0 0 0 0-2z" />
          </Icon>
          <p>Banking</p>
        </NavbarButton>
        <NavbarButton to="/cart">
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path d="M23.32,4.1c-.57-.7-1.42-1.1-2.32-1.1H7.24l-.04-.35c-.18-1.51-1.46-2.65-2.98-2.65h-1.22c-.55,0-1,.45-1,1s.45,1,1,1h1.22c.51,0,.93,.38,.99,.88l1.38,11.7c.3,2.52,2.43,4.42,4.97,4.42h8.44c.55,0,1-.45,1-1s-.45-1-1-1H11.56c-1.29,0-2.4-.83-2.82-2h9.42c2.38,0,4.44-1.69,4.9-4.02l.88-4.39c.18-.88-.05-1.79-.62-2.49ZM11,22c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm9,0c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2ZM0,6c0-.55,.45-1,1-1h1.54c.55,0,1,.45,1,1s-.45,1-1,1H1c-.55,0-1-.45-1-1Zm0,4c0-.55,.45-1,1-1H3c.55,0,1,.45,1,1s-.45,1-1,1H1c-.55,0-1-.45-1-1Zm5,4c0,.55-.45,1-1,1H1c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1Z" />
          </Icon>
          <p>E-Commerce</p>
        </NavbarButton>
        <NavbarButton to="/">
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            id="Filled"
            viewBox="0 0 24 24"
            width="512"
            height="512"
          >
            <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5V21a7,7,0,0,1,14,0v3a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
            <circle cx="12" cy="8" r="2" />
            <path d="M12,16a5.006,5.006,0,0,0-5,5v3H17V21A5.006,5.006,0,0,0,12,16Z" />
          </Icon>
          <p>User</p>
        </NavbarButton>
      </NavbarWrapInside>
    </NavbarWrapper>
  );
};

export default Navbar;
