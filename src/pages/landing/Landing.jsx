import React from "react";
import Feed from "../../components/feed/Feed";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landingWrapper">
      <Header />

      <div className="landingContainer">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
};

export default Landing;
