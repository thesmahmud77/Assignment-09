import React from "react";

export default function Testimonial() {
  return (
    <div>
      <section className="py-12 bg-white" data-aos="zoom-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
            Meet Our Expert Vets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vet 1 */}
            <div className="text-center p-6 bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
                alt="Doctor"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white"
              />
              <h3 className="text-xl font-bold text-blue-800">
                Dr. Sarah Adams
              </h3>
              <p className="text-orange-500 font-semibold">Pet Nutritionist</p>
              <p className="text-sm text-gray-500 mt-2">
                Expert in winter calorie management and diet planning.
              </p>
            </div>
            {/* Vet 2 */}
            <div className="text-center p-6 bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400"
                alt="Doctor"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white"
              />
              <h3 className="text-xl font-bold text-blue-800">
                Dr. James Wilson
              </h3>
              <p className="text-orange-500 font-semibold">Dermatologist</p>
              <p className="text-sm text-gray-500 mt-2">
                Specializes in dry skin and paw pad treatments for winter.
              </p>
            </div>
            {/* Vet 3 */}
            <div className="text-center p-6 bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=400"
                alt="Doctor"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white"
              />
              <h3 className="text-xl font-bold text-blue-800">
                Dr. Emily Brown
              </h3>
              <p className="text-orange-500 font-semibold">General Surgeon</p>
              <p className="text-sm text-gray-500 mt-2">
                Over 10 years of experience in emergency pet care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
