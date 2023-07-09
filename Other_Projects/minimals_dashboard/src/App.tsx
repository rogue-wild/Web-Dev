import React from "react";
import SocialMetrics from "./components/social_metrics";
import About from "./components/about";
import SocialLinks from "./components/social_links";
import "./App.css";
import UserDashboard from "./components/userDashboard";
import CreatePost from "./components/create/createPost";
import PostView from "./components/postView";

function App() {
  return (
    <div>
      <div className="dashboard">
        <UserDashboard />
      </div>

      <div className="App">
        <div className="sidebar">
          <SocialMetrics />
          <About />
          <SocialLinks />
        </div>
        <div className="main-content">
          <CreatePost />
          <PostView />
        </div>
      </div>
    </div>
  );
}

export default App;
