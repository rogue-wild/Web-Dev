// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileView from "./profileView/profileView";
import AppView from "./appView/appView";
import NavbarHeader from "./navbarHeader"

function AppRouter() {
  return (
    <Router>
      <div className="App">
        <NavbarHeader />
        <Routes>
          <Route path="/" element={<ProfileView />} />
          <Route path="/app" element={<AppView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
