import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";

import Spinner from "../../components/Spinner";
import { toast } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("Error occurred" + message);
    }

    if (isSuccess || user) {
      toast.success("Welcome to Connect!");
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // Convert image into url using cloudinary
  const postDetails = (pics) => {
    setLoading(true);
    if (pics === null || undefined) {
      toast.error("Please select an Image");
      alert("No image selected");
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
            toast({
              title: "Please select an Image",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            alert("Select Image");
            return;
          }
          setProfile(data.url);
          setLoading(false);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !profile || !email || !password) {
      toast.error("All details needed");
      return;
    } else {
      try {
        const userData = { name, email, profile, password };
        // console.log(profile);
        dispatch(register(userData));
        toast.success("Welcome to connect");
      } catch (error) {
        toast.error("An error occurres" + message);
        alert("Registration failed");
      }
    }
  };

  return (
    <div className="registerWrapper">
      <div className="registerContainer">
        <div className="imageSlide">
          <img
            src="https://images.pexels.com/photos/3228812/pexels-photo-3228812.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className="formSlide">
          <h1>Valerian Chat</h1>

          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              value={name}
              placeholder="Create a username"
              id=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              name=""
              placeholder="Enter your email"
              value={email}
              id=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <div className="fileUpload">
              <BsCloudUpload className="upload" />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => postDetails(e.target.files[0])}
              />
              <p>
                Recommendation: Use high-quality JPG, JPEG, SVG or PNG as your
                profile
              </p>
            </div>

            <input
              type="password"
              name=""
              value={password}
              placeholder="Create a secure password"
              id=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {isLoading || loading ? (
              <Spinner message="Activity happening" />
            ) : (
              <button type="submit" onClick={handleSubmit}>
                Register
              </button>
            )}
          </form>

          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <div className="form__slideOptions">
              <span>Already have an account ? Login</span>
              <FiArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
