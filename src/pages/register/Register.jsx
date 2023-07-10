import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";
// import "./register.css";
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
  const [upload, setUpload] = useState(false);
  const postDetails = (pics) => {
    setUpload(true);
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
          setUpload(false);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
          setUpload(false);
        });
    } else {
      toast({
        title: "Please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setUpload(false);
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
    <div className="w-full h-[100vh]">
      <img
        src="https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt="Background Placeholder"
        className="w-full h-[100vh] object-cover"
      />

      {/* overlay div */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]" />
      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
        {/* content */}
        <div className=" w-[98%] xl:w-[40%] 2xl:w-[30%]">
          <h2 className="mb-[10px] text-center text-3xl">Welcome To CONNECT</h2>
          <p className="mb-[20px] text-zinc-300 text-lg">
            Please Create An Account
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            <input
              type="text"
              name=""
              value={name}
              placeholder="Create a username"
              id=""
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="bg-transparent outline-none border-2 border-gray-300 p-[8px] rounded-md"
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
              className="bg-transparent outline-none border-2 border-gray-300 p-[8px] rounded-md"
            />

            <div className="">
              {upload ? (
                <Spinner message="Uploading Profile" />
              ) : (
                <>
                  {profile ? (
                    <div className="flex justify-center">
                      <img
                        src={profile}
                        className="w-[75px] h-[75px] rounded-md object-cover"
                        alt="profile"
                      />
                    </div>
                  ) : (
                    <>
                      <label htmlFor="imageUpload" className="flex gap-[15px]">
                        <BsCloudUpload className="text-3xl" />
                        <div>
                          <p>Upload Profile</p>
                          <p className="text-zinc-300">
                            Recommendation: Use high-quality JPG, JPEG, SVG or
                            PNG as your profile
                          </p>
                        </div>
                      </label>
                    </>
                  )}
                </>
              )}

              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={(e) => postDetails(e.target.files[0])}
                className="hidden"
              />
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
              className="bg-transparent outline-none border-2 border-gray-300 p-[8px] rounded-md"
            />

            {isLoading || loading ? (
              <Spinner message="Activity happening" />
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-slate-800"
              >
                Register
              </button>
            )}
          </form>

          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <div className="flex gap-[20px] mt-[10px]">
              <span className="underline text-zinc-300">
                Already have an account ? Login
              </span>
              <FiArrowUpRight className="text-lg" />
            </div>
          </Link>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Register;
