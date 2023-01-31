import React, { useEffect, useState } from "react";
// import Post from "../post/Post";
import "./profileDetail.css";
import { Link } from "react-router-dom";

import { FiMoreHorizontal } from "react-icons/fi";
import {
  AiFillHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";

import { register, reset, logout } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import moment from "moment";

const ProfileDetail = () => {
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // );

  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );

  const fetchUser = async () => {
    // console.log(id);
    const response = await axios.get(`/user/${id}`);
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
          <img src={user?.profile} alt={user?.name} />
        </div>
      </div>

      <div className="profileDetails">
        <h4>{user?.name}</h4>
        <p>{user?.email}</p>
        <span>Follow</span>
      </div>

      <div className="profileLogout">
        <button onClick={handleLogout}>Logout of your account</button>
      </div>

      {/* Posts */}

      {/* if posts.user === user.name */}

      {/* {posts?.user === user?.name ? <p>posts</p> : <p>No posts</p>} */}

      {posts?.map((item) => (
        <div key={item.id}>
          {item?.user === user?.name ? (
            <div className="postWrapper" style={{ marginTop: "1em" }}>
              <div className="postCard">
                <div className="postCardTop">
                  <div className="postCardTopLeft">
                    <div className="imgComp">
                      <img src={item.profile} alt="" />
                    </div>
                    <div className="authComp">
                      <p>{item.user}</p>

                      <span>{moment(item.createdAt).fromNow()}</span>
                    </div>
                  </div>
                  <div className="postCardTopRight">
                    <FiMoreHorizontal />
                  </div>
                </div>

                {/*  */}
                <div className="postCardMainImage">
                  <img src={item.image} alt="" />
                </div>
                {/*  */}
                <div className="postCardTitle">{item.title}</div>
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
          ) : (
            <p></p>
          )}
        </div>
      ))}

      {/* end of posts */}
    </div>
  );
};

export default ProfileDetail;
