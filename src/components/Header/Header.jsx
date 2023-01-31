import React from "react";
import "./header.css";

import { AiOutlineHome } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { AiOutlineAppstore, AiOutlineBell } from "react-icons/ai";
import { MdOutlinePersonOutline, MdOutlineMessage } from "react-icons/md";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

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
          {!user ? (
            <Link to={`/login`} style={{ textDecoration: "none" }}>
              <div className="headerAvatar">
                <img
                  src="https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="profile"
                />
                <span>Login Now</span>
              </div>
            </Link>
          ) : (
            <Link
              to={`/profile/${user?._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="headerAvatar">
                <img src={user?.profile} alt={user?.name} />
                <span style={{ color: "black" }}>{user?.name}</span>
              </div>
            </Link>
          )}
          {/* <h1>Lucy</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
