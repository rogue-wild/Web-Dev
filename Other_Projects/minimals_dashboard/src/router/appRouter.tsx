// AppRouter.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileView from "../components/Screens/profile/profileView";
import AppView from "../components/Screens/appView";
import LoginPage from "../components/Screens/loginPage";
import NavbarHeader from "../components/navbarHeader";

function AppRouter() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {loggedIn && <NavbarHeader onLogout={handleLogout} />}
        <Routes>
          {loggedIn ? (
            <React.Fragment>
              <Route path="/" element={<ProfileView />} />
              <Route path="/app" element={<AppView />} />
            </React.Fragment>
          ) : (
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
