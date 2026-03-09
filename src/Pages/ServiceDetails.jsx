import React, { useEffect, useState } from "react";
import NavMenu from "../Components/NavMenu";
import FooterMenu from "../Components/FooterMenu";
import { useLoaderData, useParams } from "react-router";
import SingleServiceDetails from "../Components/SingleServiceDetails";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const foundService = serviceData.find(
      (singleServices) => singleServices.serviceId == id,
    );
    if (foundService) {
      setService(foundService);
    }
  }, [serviceData, id]);

  // console.log(service);
  return (
    <div>
      <NavMenu></NavMenu>
      <div></div>
      <SingleServiceDetails service={service}></SingleServiceDetails>
      <FooterMenu></FooterMenu>
    </div>
  );
};

export default ServiceDetails;
