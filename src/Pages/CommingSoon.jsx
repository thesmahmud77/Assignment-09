import React from "react";
import NavMenu from "../Components/NavMenu";
import FooterMenu from "../Components/FooterMenu";

const CommingSoon = () => {
  return (
    <div>
      <NavMenu></NavMenu>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bold text-6xl">COMMING SOON</h1>
      </div>
      <FooterMenu></FooterMenu>
    </div>
  );
};

export default CommingSoon;
