import React from "react";
import NavMenu from "../Components/NavMenu";
import FooterMenu from "../Components/FooterMenu";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const Servicedata = useLoaderData();
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <NavMenu></NavMenu>

      <FooterMenu></FooterMenu>
    </div>
  );
};

export default ServiceDetails;
