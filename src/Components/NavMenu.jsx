import React, { use } from "react";
import { NavLink } from "react-router";
// import DpImg from "../assets/DpImg";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Provider/AuthProvider";

export default function NavMenu() {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    console.log("user Trying to Logout");
    logOut()
      .then(() => {
        alert("Logout Successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
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
      </div>
      <div className="profile col-span-3 flex items-center justify-center">
        {user ? (
          <button
            onClick={handleLogout}
            className={"text-xl font-bold bg-amber-400 px-10 py-2 rounded-2xl"}
          >
            logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={"text-xl font-bold bg-amber-400 px-10 py-2 rounded-2xl"}
          >
            Login
          </NavLink>
        )}

        <NavLink to={"/profile"}>
          <CgProfile size={30} />
        </NavLink>
      </div>
    </div>
  );
}
