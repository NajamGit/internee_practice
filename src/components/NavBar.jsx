import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-[50px] flex items-center justify-between font-medium bg-[#000000]">
      <ul className="sm:flex gap-5 text-sm text-white ml-[72px]">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collections" className="flex flex-col items-center gap-1">
          <p>Collections</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 mr-[72px]">
        <div className="text-white flex">
          <img
            src={assets.register}
            className="w-5 cursor-pointer mr-4"
            alt=""
          />
          <p className="w-[62px] h-[12px] text-base">Register</p>
        </div>
        <div className="text-white flex">
          <img src={assets.login} className="w-5 cursor-pointer mr-4" alt="" />
          <p className="w-[62px] h-[12px] text-base">Login</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
