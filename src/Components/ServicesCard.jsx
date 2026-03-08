import React from "react";
import { Link } from "react-router";

const ServicesCard = ({ singlePetData }) => {
  const {
    serviceId,
    image,
    serviceName,
    category,
    pricing,
    counselor,
    rating,
  } = singlePetData;

  return (
    <div className="card card-compact bg-base-100 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
      {/* Image Section [cite: 77] */}
      <figure className="h-48">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content Section [cite: 78, 79, 80] */}
      <div className="card-body p-5">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-blue-900 text-lg font-bold">
            {serviceName}
          </h2>
          <div className="badge badge-outline text-xs bg-blue-50 text-blue-600 border-blue-200">
            {category}
          </div>
        </div>

        <p className="text-gray-500 font-medium">Expert: {counselor}</p>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-bold text-gray-700">{rating}</span>
          </div>
          <p className="text-xl font-extrabold text-blue-700">{pricing}</p>
        </div>

        {/* View Details Button [cite: 81] */}
        <div className="card-actions mt-4">
          <Link
            to={`/service/${serviceId}`}
            className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white w-full normal-case"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
