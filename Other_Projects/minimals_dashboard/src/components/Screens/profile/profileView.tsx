import React from "react";
import SocialMetrics from "../../infoCards/socialMetrics";
import About from "../../infoCards/about";
import SocialLinks from "../../infoCards/socialLinks";
import "./profileView.css";
import UserDashboard from "../../post/userDashboard";
import CreatePost from "../../create/createPost";
import PostView from "../../post/postView";
import DashView from "../../infoCards/dashView";

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
