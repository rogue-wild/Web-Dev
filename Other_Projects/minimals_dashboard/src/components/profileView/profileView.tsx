import React from "react";
import SocialMetrics from "../sideComponents/socialMetrics";
import About from "../sideComponents/about";
import SocialLinks from "../sideComponents/socialLinks";
import "./profileView.css";
import UserDashboard from "../post/userDashboard";
import CreatePost from "./../create/createPost";
import PostView from "../post/postView";
import DashView from "../sideComponents/dashView";

function ProfileView() {
  return (
    <div className="profileView">
      <DashView />
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

export default ProfileView;
