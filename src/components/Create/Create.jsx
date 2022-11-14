import React from "react";
import "./create.css";
import { FcAddImage } from "react-icons/fc";

import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";

const Create = () => {
  return (
    <div className="createWrapper">
      <div className="createText">
        <div className="createImg">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className="createTxt">
          <input type="text" placeholder="What's on your mind John? " />
        </div>
      </div>
      {/*  */}
      <div className="createImage">
        <div className="createImageFirst">
          <div className="imgAdd">
            <FcAddImage className="imgAddIco" />
            <p>Add Image</p>
          </div>

          <div className="imgAdd">
            <BiLocationPlus className="imgAddIco" />
            <p> Add Location</p>
          </div>
          <div className="imgAdd">
            <BsFillPersonCheckFill className="imgAddIco" />
            <p>Tag Someone</p>
          </div>
        </div>
        <div className="createImageLast">
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
