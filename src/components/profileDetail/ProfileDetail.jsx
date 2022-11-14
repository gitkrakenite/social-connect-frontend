import React from "react";
import Post from "../post/Post";
import "./profileDetail.css";

import { FiMoreHorizontal } from "react-icons/fi";
import {
  AiFillHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";

const ProfileDetail = () => {
  return (
    <div className="profileDetailWrapper">
      <div className="profileCoverImage">
        <div className="profileCImage">
          <img
            src="https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>

        <div className="profileUserImg">
          <img
            src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
      </div>

      <div className="profileDetails">
        <h4>Jack Randall</h4>
        <p>jackrandall@example.com</p>
        <span>Follow</span>
      </div>

      {/* Posts */}

      <div className="postWrapper" style={{ marginTop: "1em" }}>
        <div className="postCard">
          <div className="postCardTop">
            <div className="postCardTopLeft">
              <div className="imgComp">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="authComp">
                <p>Joh Doe</p>

                <span>2 mins ago</span>
              </div>
            </div>
            <div className="postCardTopRight">
              <FiMoreHorizontal />
            </div>
          </div>

          {/*  */}
          <div className="postCardMainImage">
            <img
              src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          {/*  */}
          <div className="postCardTitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
            dolorem illum sapiente in laudantium maxime? Veritatis voluptatem ab
            nihil, incidunt ut omnis adipisci doloremque ipsa. Totam deserunt
            perspiciatis debitis iure?
          </div>
          {/*  */}
          <div className="postCardDetail">
            <div className="postCardTile love">
              <AiFillHeart className="postLove" />
              <span>20 Likes</span>
            </div>
            <div className="postCardTile comment">
              <AiOutlineMessage className="postComment" />
              <span>2 comments</span>
            </div>
            <div className="postCardTile share">
              <AiOutlineShareAlt className="postShare" />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>

      {/* end of posts */}
    </div>
  );
};

export default ProfileDetail;
