import React from "react";
import ScrollingHero from "../Components/ScrollingHero";
import ServicesCard from "../Components/ServicesCard";
import { useLoaderData } from "react-router";
import WinterCare from "../Components/StaticHome/WinterCare";
import Testimonial from "../Components/StaticHome/Testimonial";
import PetGear from "../Components/StaticHome/PetGear";

const Home = () => {
  const data = useLoaderData();
  // console.log(Data);
  return (
    <div>
      <div>
        <ScrollingHero></ScrollingHero>
      </div>

      <section className="my-20">
        <div className="my-5">
          <h1 className="font-bold text-4xl text-center mb-1">
            <spen className="text-primary">Warmth & Care</spen> for Your Pets
          </h1>
          <p className="text-center">
            Discover the best winter wellness and grooming services for a happy,
            healthy pet.
          </p>
        </div>
        <div className="grid grid-cols-3">
          {data.map((singlePetData) => (
            <ServicesCard
              key={singlePetData.id}
              singlePetData={singlePetData}
            ></ServicesCard>
          ))}
        </div>
      </section>
      <WinterCare></WinterCare>
      <Testimonial></Testimonial>
      <PetGear></PetGear>
    </div>
  );
};

export default Home;
