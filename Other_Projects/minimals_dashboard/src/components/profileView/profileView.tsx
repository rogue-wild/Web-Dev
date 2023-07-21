import React from "react";
import SocialMetrics from "./../social_metrics";
import About from "./../about";
import SocialLinks from "./../social_links";
import "./profileView.css";
import UserDashboard from "./../userDashboard";
import CreatePost from "./../create/createPost";
import PostView from "./../postView";
import DashView from "./../dashView";

function ProfileView() {
  return (
    <div className="profileView">
      <DashView/>
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
