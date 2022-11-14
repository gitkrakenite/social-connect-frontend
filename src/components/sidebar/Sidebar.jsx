import React from "react";
import "./sidebar.css";

import {
  BsPeople,
  BsFillCollectionPlayFill,
  BsStopwatch,
  BsCalendar3,
} from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { FcGallery, FcVideoCall, FcNews } from "react-icons/fc";
import {
  AiOutlineVideoCameraAdd,
  AiOutlineMail,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarContainer">
        <div className="sideTop">
          <ul>
            <Link to={`/profile/23`} style={{ textDecoration: "none" }}>
              <li>
                <img
                  src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>John Doe</span>
              </li>
            </Link>
            <li>
              <BsPeople style={{ fontSize: "24px", color: "blue" }} />
              <span>Friends</span>
            </li>
            <li>
              <MdGroupAdd style={{ fontSize: "24px", color: "#428df5" }} />
              <span>Groups</span>
            </li>
            <li>
              <SiMarketo style={{ fontSize: "24px", color: "#d117c5" }} />
              <span>MarketPlace</span>
            </li>
            <li>
              <BsFillCollectionPlayFill
                style={{ fontSize: "24px", color: "#d11739" }}
              />
              <span>Watch</span>
            </li>
            <li>
              <BsStopwatch style={{ fontSize: "24px", color: "#d1179c" }} />
              Memories
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="sideCenter">
          <h1>Your Shortcuts</h1>
          <ul>
            <li>
              <BsCalendar3 style={{ fontSize: "24px", color: "blue" }} />
              <span>Events</span>
            </li>
            <li>
              <TbDeviceGamepad2
                style={{ fontSize: "24px", color: "#428df5" }}
              />
              <span>Gaming</span>
            </li>
            <li>
              <FcGallery style={{ fontSize: "24px", color: "#d117c5" }} />
              <span>Gallery</span>
            </li>
            <li>
              <AiOutlineVideoCameraAdd
                style={{ fontSize: "24px", color: "#d11739" }}
              />
              <span>Videos</span>
            </li>
            <li>
              <AiOutlineMail style={{ fontSize: "24px", color: "#d1179c" }} />
              Messages
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="sideBottom">
          <h1>Other Important</h1>
          <ul>
            <li>
              <AiOutlineDollarCircle
                style={{ fontSize: "24px", color: "blue" }}
              />
              <span>Fundraiser</span>
            </li>
            <li>
              <FcVideoCall style={{ fontSize: "24px", color: "#428df5" }} />
              <span>Tutorials</span>
            </li>
            <li>
              <RiMovie2Line style={{ fontSize: "24px", color: "#d117c5" }} />
              <span>Documentaries</span>
            </li>
            <li>
              <BsBook style={{ fontSize: "24px", color: "#d11739" }} />
              <span>Courses</span>
            </li>
            <li>
              <FcNews style={{ fontSize: "24px", color: "#d1179c" }} />
              News
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
