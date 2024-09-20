import React from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="w-full h-[100px] text-white flex flex-col items-center">
      {/* Top Line */}
      <div className="w-1/2 h-[2px] mt-4 bg-[#D0C5C580]"></div>

      {/* Navigation Links */}
      <div className="flex items-center justify-center flex-grow text-[#84BD00]">
        <nav className="flex space-x-12">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/" className="hover:underline">
            Explore
          </Link>
          <Link to="/" className="hover:underline">
            Help
          </Link>
          <Link to="/" className="hover:underline">
            Profile
          </Link>
        </nav>
      </div>

      {/* Bottom Line */}
      <div className="w-1/2 h-[2px] bg-[#D0C5C580]"></div>
    </div>
  );
};

export default SubHeader;
