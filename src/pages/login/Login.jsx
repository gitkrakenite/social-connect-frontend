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
    <div className="loginWrapper">
      <div className="loginContainer">
        <div className="login__formSlide">
          <h1>Valerian Chat</h1>

          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

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

            {/* {isLoading ? <Spinner message="Please wait" /> : ()} */}
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </form>

          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <div className="loginform__slideOptions">
              <span>Are you new here ? Register</span>
              <FiArrowUpRight />
            </div>
          </Link>
        </div>

        {/*  */}
        <div className="loginimageSlide">
          <img
            src="https://images.pexels.com/photos/2307562/pexels-photo-2307562.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
