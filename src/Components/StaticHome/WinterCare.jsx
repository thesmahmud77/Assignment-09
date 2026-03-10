import React from "react";

export default function WinterCare() {
  return (
    <div className="container mx-auto px-4 mt-15">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Winter Care Tips for Pets
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="collapse collapse-plus bg-white border border-blue-100">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-blue-800">
            Keep Them Hydrated
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Pets often drink less water in winter. Ensure they have access to
              fresh, non-frozen water at all times to prevent dehydration.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border border-blue-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-blue-800">
            Protect Their Paws
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Ice and salt can crack paw pads. Use pet-safe balms or booties
              when going for walks in the snow.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border border-blue-100">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-blue-800">
            Warm Bedding is Essential
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Make sure your pet's bed is off the cold floor. Use extra blankets
              or a heated pet mat for senior dogs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
