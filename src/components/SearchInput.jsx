import React from "react";
import { assets } from "../assets/assets";

const SearchInput = () => {
  return (
    <div className="flex items-center justify-around border-t border-b text-gray-50 text-center">
      <img className="cursor-pointer" src={assets.logo2} alt="" />

      {/* Input wrapper */}
      <div className="relative flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-full sm:w-1/2">
        {/* All Categories Button */}
        <div className="absolute left-0 flex items-center px-3 bg-[#D0C5C5] text-[#000000] rounded-full h-full cursor-pointer">
          <button className="text-base whitespace-nowrap">
            All Categories
          </button>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="search"
          className="w-full pl-[140px] pr-[40px] h-full outline-none bg-inherit text-black text-sm"
        />

        {/* Search Icon */}
        <div className="absolute right-0 flex items-center pr-3">
          <img
            src={assets.search_icon}
            className="w-6 h-6 cursor-pointer"
            alt="search"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
