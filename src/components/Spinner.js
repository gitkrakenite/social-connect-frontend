import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#1385ab"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
