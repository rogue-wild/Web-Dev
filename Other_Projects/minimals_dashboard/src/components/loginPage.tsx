// LoginPage.tsx
import React, { useState } from "react";
import styled from "styled-components";
import LoginImage from "../assets/Account-amico.png";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Welcome = styled.div`
  background-color: #f4f9f9;
  height: 100vh;
  h1 {
    background: -webkit-linear-gradient(#d337de, #00d28f);
    -webkit-background-clip: text;
    background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-top: 1rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    margin-top: -2rem;
    height: 30vh;
  }
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;

  input {
    ::placeholder {
      color: #e3e3e3;
      font-weight: 400;
      font-size: 1rem;
      font-family: "Public Sans", sans-serif;
    }
    padding: 1rem;
    margin: 0.5rem;
    width: 15rem;
    border: 2px solid #e5e5e5;
    border-radius: 10px;
  }
  @media (max-width: 650px) {
    padding: 1rem;
    font-size: 0.8rem;
    margin: auto;
    input {
      ::placeholder {
        font-size: 0.8rem;
        font-family: "Public Sans", sans-serif;
      }
      padding: 0.8rem;
      margin: 0.5rem;
    }
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const LogIn = styled.button`
  background-color: #000014;
  color: #ffffff;
  font-size: 1rem;
  font-family: "Public Sans", sans-serif;
  font-weight: 400;
  padding: 0.7rem;
  margin: 0.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  width: 17rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #222e3b;
    color: #eeeeee;
    box-shadow: 0px 0px 3px 0px rgb(126, 126, 126);
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const Prompt = styled.div`
  background-color: #a4fdff;
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 10px;
  margin-bottom: 1rem;
  line-height: 0.2rem;
  width: 16rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const LogImage = styled.img`
  width: 75%;
  padding: 1rem 0rem 0 4rem;
  @media (max-width: 700px) {
    padding: 1rem 0rem 0 2rem;
  }
  @media (max-width: 600px) {
    display: none;
    width: 0%;
  }
`;

function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check the email and password
    if (email === "demo@minimals.cc" && password === "demo1234") {
      onLogin();
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <LoginPageWrapper>
      <Welcome>
        <h1>Hi, Welcome back</h1>
        <LogImage src={LoginImage} alt="" />
      </Welcome>
      <LoginForm>
        <h2>Sign in to Minimal</h2>
        <Prompt>
          <p>Use email : demo@minimals.cc /</p>
          <p>password : demo1234</p>
        </Prompt>
        <div>
          <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <LogIn onClick={handleLogin}>Login</LogIn>
        </div>
      </LoginForm>
    </LoginPageWrapper>
  );
}

export default LoginPage;
