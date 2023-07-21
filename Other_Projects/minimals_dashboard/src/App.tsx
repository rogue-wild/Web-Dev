import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileView from "./components/profileView/profileView";
import AppView from "./components/appView/appView";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar"><Navbar /></div>
        <div className="header"> <Header /></div>
        <Routes>
          <Route path="/" element={<ProfileView/>} />
          <Route path="/app" element={<AppView/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
