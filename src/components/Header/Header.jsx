import React from "react";
import "./header.css";

import { AiOutlineHome } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { AiOutlineAppstore, AiOutlineBell } from "react-icons/ai";
import { MdOutlinePersonOutline, MdOutlineMessage } from "react-icons/md";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="headerContainer">
        <div className="headerFirst">
          <div className="headerLogo">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <h1>valeriansocial</h1>
            </Link>
          </div>
          <div className="valerianIcons">
            <AiOutlineHome
              style={{
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
            <BsMoon
              style={{
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
            <AiOutlineAppstore
              style={{
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
          </div>
          <div className="headerInput">
            <form>
              <input type="text" placeholder="Search posts " />
              <button type="submit"></button>
            </form>
          </div>
        </div>
        {/*  */}
        <div className="headerLast">
          <div className="headerIcons">
            <MdOutlinePersonOutline
              style={{
                cursor: "pointer",
                fontSize: "20px",
              }}
            />
            <MdOutlineMessage style={{ cursor: "pointer", fontSize: "20px" }} />
            <AiOutlineBell style={{ cursor: "pointer", fontSize: "20px" }} />
          </div>
          <Link to={`/profile/23`} style={{ textDecoration: "none" }}>
            <div className="headerAvatar">
              <img
                src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="man"
              />
              <span>John Doe</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
