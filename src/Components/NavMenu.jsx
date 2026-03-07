import React, { use } from "react";
import { NavLink } from "react-router";
// import DpImg from "../assets/DpImg";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Provider/AuthProvider";

export default function NavMenu() {
  const { user } = use(AuthContext);
  return (
    <div className=" grid grid-cols-12 items-center justify-between">
      <div className="logo font-bold text-2xl col-span-3 flex items-center justify-center">
        <NavLink to="/" className={"text-xl font-bold"}>
          {user && user.email}
        </NavLink>
      </div>
      <div className="NavMenu flex items-center justify-center col-span-6 gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold border-b-2 border-blue-500 pb-1"
              : "text-xl font-bold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold border-b-4 border-blue-500 pb-1"
              : "text-xl font-bold"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-bold border-b-4 border-blue-500 pb-1"
              : "text-xl font-bold"
          }
        >
          Register
        </NavLink>
      </div>
      <div className="profile col-span-3 flex items-center justify-center">
        <NavLink to={"/profile"}>
          {user ? user.photoURL : <CgProfile size={30} />}
        </NavLink>
      </div>
    </div>
  );
}
