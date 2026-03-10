import React, { use } from "react";
import { NavLink } from "react-router";
// import DpImg from "../assets/DpImg";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Provider/AuthProvider";

export default function NavMenu() {
  const { user, logOut } = use(AuthContext);
  console.log(user);
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
    <div className=" grid grid-cols-12 items-center justify-between bg-base-200">
      <div className="logo font-bold text-2xl col-span-3 flex items-center justify-center">
        <NavLink to="/" className={"text-xl font-bold"}>
          {/* {user && user.email} */}
          <h1 className="font-bold">Logo</h1>
        </NavLink>
      </div>
      <div className="NavMenu flex items-center justify-center col-span-6 gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-xl border-b-2 border-blue-500 pb-1" : "text-xl "
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/comming-soon"
          className={({ isActive }) =>
            isActive ? "text-xl border-b-2 border-blue-500 pb-1" : "text-xl"
          }
        >
          Comming Soon
        </NavLink>
      </div>
      <div className="profile col-span-3 flex items-center justify-center gap-3">
        {user ? (
          <button onClick={handleLogout} className={"btn bg-red-500 px-10"}>
            logout
          </button>
        ) : (
          <NavLink to="/login" className={"btn bg-blue-700 text-white px-10"}>
            Login
          </NavLink>
        )}

        <NavLink to={"/profile"}>
          {/* <CgProfile size={30} /> */}
          {user ? <CgProfile size={30} /> : ""}
        </NavLink>
      </div>
    </div>
  );
}
