import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img src={assets.banner2} alt="" />
      <h1 className="absolute w-[450px] h-[70px] left-40 flex items-center px-3 text-[#FFFFFF] text-6xl font-normal">
        Food Diary
      </h1>
    </div>
  );
};

export default Banner;
