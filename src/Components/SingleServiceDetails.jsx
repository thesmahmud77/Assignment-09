import React from "react";
import { Navigate, NavLink } from "react-router";

const SingleServiceDetails = ({ service }) => {
  const { serviceName, image, description, pricing } = service;
  return (
    <div className="flex items-center justify-between">
      <div>
        <img
          src={image}
          alt={serviceName}
          className="w-full rounded-2xl mb-4"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{serviceName}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-xl font-bold text-blue-600 mt-4">Price: {pricing}</p>
        <NavLink className={"btn btn-primary"} to={"/"}>
          get back
        </NavLink>
      </div>
    </div>
  );
};

export default SingleServiceDetails;
