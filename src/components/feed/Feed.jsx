import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import "./feed.css";

import dummyData from "../../dummyData";
import Create from "../Create/Create";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, getReels, createReel } from "../../features/posts/postSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import moment from "moment";

const Feed = () => {
  const { posts, reels, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );

  const [showReel, setShowReel] = useState(false);
  const [image, setImage] = useState("");

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleCreateReel = (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Image URL needed");
      return;
    } else {
      try {
        const reelData = { image };
        dispatch(createReel(reelData));
        setImage("");
        toast.success("reel created");
      } catch (error) {
        toast.error(error);
      }
    }
  };

  useEffect(() => {
    dispatch(getReels());
    dispatch(getPosts());
  }, [dispatch, posts]);

  // useEffect(() => {
  //   dispatch(getPosts());
  //   dispatch(getReels());
  // }, []);

  return (
    <div className="feedWrapper">
      <div className="feedContainer hide-scrollbar">
        <div className="myReel">
          <img
            src={
              user?.profile ||
              "https://images.pexels.com/photos/1883386/pexels-photo-1883386.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            alt=""
          />

          <div className="bottomLeft">
            {user ? (
              <span onClick={() => setShowReel(!showReel)}>+</span>
            ) : (
              <span>"{}"</span>
            )}
          </div>
        </div>
        {reels?.map((reel) => (
          <div className="myReel" key={reel._id}>
            <img src={reel.image} alt="" />

            <div className="bottomLeft">
              <Link
                to={`/profile/${reel.userId}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>
                  {reel.user} | {moment(reel.createdAt).fromNow()}
                </p>
              </Link>
            </div>
          </div>
        ))}

        {/*  */}
      </div>

      {/* create reel form */}
      {showReel ? (
        <div className="createReelFormWrapper">
          {/* {alert("show")} */}
          <form onSubmit={handleCreateReel}>
            <div style={{ flex: 0.7 }}>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Place the photo url here"
              />
            </div>
            <div style={{ flex: 0.3 }} className="reelSpanBtn">
              <p type="submit" onClick={handleCreateReel}>
                Create Reel
              </p>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}

      <div>
        <Create />
      </div>

      {posts?.map((data) => (
        <div key={data.id}>
          <Post data={data} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
