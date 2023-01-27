import React from "react";
// import Feed from "../../components/feed/Feed";
import Header from "../../components/Header/Header";
import ProfileDetail from "../../components/profileDetail/ProfileDetail";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import "./profile.css";

const Profile = () => {
  return (
    <div className="landingWrapper">
      <Header />

      <div className="landingContainer">
        <Sidebar />
        <ProfileDetail />
        <Widget />
      </div>
    </div>
  );
};

export default Profile;
