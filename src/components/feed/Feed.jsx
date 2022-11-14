import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import "./feed.css";

import dummyData from "../../dummyData";
import Create from "../Create/Create";

const Feed = () => {
  return (
    <div className="feedWrapper">
      <div className="feedContainer">
        <div className="myReel">
          <img
            src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div className="bottomLeft">
            <span>+</span>
          </div>
        </div>
        {/*  */}
        <div className="myReel">
          <img
            src="https://images.pexels.com/photos/1812402/pexels-photo-1812402.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div className="bottomLeft">
            <p>Mia Hemsworth</p>
          </div>
        </div>
        {/*  */}
        <div className="myReel">
          <img
            src="https://images.pexels.com/photos/1267693/pexels-photo-1267693.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div className="bottomLeft">
            <p>Jane Ledendorff</p>
          </div>
        </div>
        {/*  */}
        <div className="myReel">
          <img
            src="https://images.pexels.com/photos/3063910/pexels-photo-3063910.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div className="bottomLeft">
            <p>Jane Attenbourgh</p>
          </div>
        </div>
        {/*  */}
        <div className="myReel">
          <img
            src="https://images.pexels.com/photos/3063910/pexels-photo-3063910.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <div className="bottomLeft">
            <p>Jane Attenbourgh</p>
          </div>
        </div>
      </div>

      <div>
        <Create />
      </div>

      {dummyData.map((data) => (
        <div key={data.id}>
          <Post data={data} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
