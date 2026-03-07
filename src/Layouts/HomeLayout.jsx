import React from "react";
import NavMenu from "../Components/NavMenu";
import { Outlet } from "react-router";
import FooterMenu from "../Components/FooterMenu";

export default function HomeLayout() {
  return (
    <div>
      <NavMenu></NavMenu>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <FooterMenu></FooterMenu>
    </div>
  );
}
