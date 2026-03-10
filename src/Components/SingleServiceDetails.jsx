import React from "react";
import { Navigate, NavLink } from "react-router";

const SingleServiceDetails = ({ service }) => {
  const { serviceName, image, description, pricing } = service;
  return (
    <div className="flex items-center justify-between gap-20 my-20">
      <div>
        <figure>
          <img
            width={50}
            height={50}
            src={image}
            alt={serviceName}
            className="w-full rounded-2xl mb-4"
          />
        </figure>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">{serviceName}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        <NavLink className={"btn btn-primary mt-5 px-10"} to={"/"}>
          Get Back
        </NavLink>
      </div>
    </div>
  );
};

export default SingleServiceDetails;
