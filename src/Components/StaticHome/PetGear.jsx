import React from "react";

export default function PetGear() {
  return (
    <div>
      <section className="py-12 bg-blue-900 text-white" data-aos="fade-right">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 gap-2">
            <h2 className="text-3xl font-bold mb-4">Don't Let Them Chill!</h2>
            <p className="text-blue-100 mb-6 italic text-lg">
              "The best way to show love in winter is by providing warmth and
              comfort."
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✔</span> Premium Thermal Pet
                Jackets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✔</span> Non-Slip Winter
                Booties
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✔</span> Self-Warming Cozy
                Blankets
              </li>
            </ul>
            <button className="btn btn-warning mt-8 px-8">
              Shop Essentials
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600"
              className="rounded-3xl shadow-2xl border-8 border-blue-800"
              alt="Pet Gear"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
