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

  return (
    <div className=" flex-1 md:flex-[0.5] px-2">
      {/* reel container */}
      <div className="overflow-x-auto hide-scrollbar  whitespace-nowrap">
        <div className="inline-flex">
          {/* User's profile image */}
          <div className="flex-shrink-0 relative">
            <img
              src={
                user?.profile ||
                "https://images.pexels.com/photos/1883386/pexels-photo-1883386.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt=""
              className="w-64 h-64 mr-4 rounded-md"
            />
            <div className="absolute z-[999] bottom-0 left-[14%] bg-emerald-700 text-zinc-200 text-2xl mb-[10px] p-[8px] rounded-full cursor-pointer">
              {user ? (
                <span onClick={() => setShowReel(!showReel)}>+</span>
              ) : (
                <span>"{}"</span>
              )}
            </div>
          </div>

          {/* Reels */}
          {reels?.map((reel) => (
            <div className="flex-shrink-0" key={reel._id}>
              <img
                src={reel.image}
                alt=""
                className="w-64 h-64 mr-4 object-cover rounded-md"
              />
              {/* <div className="bottomLeft">
                <Link
                  to={`/profile/${reel.userId}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p>
                    {reel.user} | {moment(reel.createdAt).fromNow()}
                  </p>
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      {/*  */}

      {/* create reel form */}
      {showReel ? (
        <div className="createReelFormWrapper">
          {/* {alert("show")} */}
          <form onSubmit={handleCreateReel}>
            <div style={{ flex: 0.9 }}>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Place the photo url here"
                className="bg-transparent border-2 border-emerald-700 w-full"
              />
            </div>
            <div style={{ flex: 0.1 }} className="reelSpanBtn">
              <p type="submit" onClick={handleCreateReel}>
                Share
              </p>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}

      {user ? (
        <div>
          <Create />
        </div>
      ) : (
        <h1 style={{ color: "black", textAlign: "center", marginTop: "2em" }}>
          You need an Account
        </h1>
      )}

      {posts?.map((data) => (
        <div key={data.id}>
          <Post data={data} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
