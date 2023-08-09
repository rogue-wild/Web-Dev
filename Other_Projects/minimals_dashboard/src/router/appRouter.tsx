// AppRouter.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileView from "../screens/profile/profileView";
import AppView from "../screens/appView";
import LoginPage from "../screens/loginPage";
import NavbarHeader from "../components/navbarHeader";
import AccountPage from "../screens/accountPage";

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
              <Route path="/settings" element={<AccountPage />} />
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
