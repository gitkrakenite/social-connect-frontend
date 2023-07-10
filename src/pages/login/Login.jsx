import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import { toast } from "react-hot-toast";
import { login, reset } from "../../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("Invalid Credentials ");
    }

    if (user || isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, isLoading, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Either name or password missing");
      return;
    } else {
      try {
        const userData = { email, password };
        dispatch(login(userData));
        if (isSuccess) {
          toast.success("Welcome back");
          navigate("/");
        }
      } catch (error) {
        toast.error("Failed to create user");
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
          <h2 className="mb-[10px] text-center text-3xl">Welcome Back</h2>
          <p className="mb-[20px] text-zinc-300 text-lg">
            Please Login To Continue
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-transparent outline-none border-2 border-gray-300 p-[8px] rounded-md"
            />

            <input
              type="password"
              name=""
              value={password}
              placeholder="Enter Your password"
              id=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-transparent outline-none border-2 border-gray-300 p-[8px] rounded-md"
            />

            {/* {isLoading ? <Spinner message="Please wait" /> : ()} */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-slate-800"
            >
              Login
            </button>
          </form>

          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <div className="flex gap-[10px] mt-[10px]">
              <span className="underline text-zinc-300">
                Are You New Here ? Get Started
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

export default Login;
