import React from "react";
import NavMenu from "../Components/NavMenu";
import FooterMenu from "../Components/FooterMenu";
import image from "../assets/dp.jpeg";

const MyProfile = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <div className="flex items-center justify-center gap-30 min-h-screen">
        <div>
          <figure>
            <img width={200} src={image} alt="" />
          </figure>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Md Mahmudul Hossain</h1>
          <p>Web Developer</p>
        </div>
      </div>
      <FooterMenu></FooterMenu>
    </div>
  );
};

export default MyProfile;
