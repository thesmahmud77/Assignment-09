import React, { useContext } from "react";
import NavMenu from "../Components/NavMenu";
import FooterMenu from "../Components/FooterMenu";
import image from "../assets/dummyDP.png";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-[1240px] mx-auto">
      <NavMenu />

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 min-h-screen">
        {/* Profile Image */}
        <div>
          <figure>
            <img
              className="w-52 h-52 object-cover rounded-lg shadow-lg"
              src={user?.photoURL || image}
              alt="profile"
            />
          </figure>
        </div>

        {/* Profile Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">
            {user?.displayName || "Guest User"}
          </h1>

          <p className="text-lg mt-2 text-gray-600">Web Developer</p>

          <p className="text-md mt-2 text-gray-500">{user?.email}</p>
        </div>
      </div>

      <FooterMenu />
    </div>
  );
};

export default MyProfile;
