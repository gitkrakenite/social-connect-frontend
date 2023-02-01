import React, { useState } from "react";
import "./create.css";
import { FcAddImage } from "react-icons/fc";

import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner";
import { createPost } from "../../features/posts/postSlice";

const Create = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // Convert image into url using cloudinary
  const postDetails = (pics) => {
    setLoading(true);
    if (pics === null || undefined) {
      toast.error("Please select an Image");
      return;
    }

    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "hooksie");
      data.append("cloud_name", "ddyw2aavm");
      fetch("https://api.cloudinary.com/v1_1/ddyw2aavm/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // if we dont have a response from cloudinary back which is data.url then we will show an error
          if (data.url === undefined) {
            toast.error("Please select an Image");
            return;
          }
          setImage(data.url);
          setLoading(false);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast.error("Please select an Image");
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login or register");
      return;
    }

    if (!title || !image || !location) {
      toast.error("Title, image and location needed");
      return;
    } else {
      try {
        const postData = { title, image, location };
        // console.log(profile);
        dispatch(createPost(postData));
        // console.log(reportData);
        handleClear();

        toast.success("Sent successfully");
      } catch (error) {
        toast.error("Error occured" + message);
      }
    }
  };

  const handleClear = () => {
    setTitle("");
    setImage("");
    setLocation("");
  };

  return (
    <div className="createWrapper">
      <form onSubmit={handleSubmit}>
        <div className="createText">
          <div className="createImg">
            <img src={user?.profile} alt={user?.name} />
          </div>
          <div className="createTxt">
            <input
              type="text"
              placeholder={
                user
                  ? `What's on your mind ${user?.name}? `
                  : "Login to create post"
              }
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        {/*  */}
        <div className="createImage">
          <div className="createImageFirst">
            <div className="imgAdd">
              <input
                type="file"
                placeholder="Add Image"
                accept="image/*"
                onChange={(e) => postDetails(e.target.files[0])}
              />
            </div>

            <div className="imgAdd locale">
              <BiLocationPlus className="imgAddIco" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Add Location"
              />
            </div>
            <div className="imgAdd">
              <BsFillPersonCheckFill className="imgAddIco" />
              <p style={{ color: "gray !important" }}>Tag Someone</p>
            </div>
          </div>
          {loading ? (
            <Spinner message="Please wait" />
          ) : (
            <div className="createImageLast">
              <button onClick={handleSubmit}>Share</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Create;
