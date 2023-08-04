import React from "react";
import SocialMetrics from "../../components/infoCards/socialMetrics";
import About from "../../components/infoCards/about";
import SocialLinks from "../../components/infoCards/socialLinks";
import "./profileView.css";
import UserDashboard from "../../components/post/userDashboard";
import CreatePost from "../../components/create/createPost";
import PostView from "../../components/post/postView";
import DashView from "../../components/infoCards/dashView";

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
