import React, { useEffect } from "react";
import Feed from "../../components/feed/Feed";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import "./landing.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

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
