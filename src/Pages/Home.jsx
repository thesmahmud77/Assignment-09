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
      <ScrollingHero></ScrollingHero>
      <section>
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
