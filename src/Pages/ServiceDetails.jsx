import React, { useState } from "react";
import NavMenu from "../Components/NavMenu";
import FooterMenu from "../Components/FooterMenu";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const servicedata = useLoaderData();
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <NavMenu></NavMenu>
      <div>
        const SingleServiceData =
        {servicedata.find((singleService) => singleService.serviceId == id)}
        setService(SingleServiceData)
      </div>
      {/* Modiul 51-5 */}
      <FooterMenu></FooterMenu>
    </div>
  );
};

export default ServiceDetails;
