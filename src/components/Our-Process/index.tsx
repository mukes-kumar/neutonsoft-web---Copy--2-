import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const OurProcess = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Process"
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 lg:mx-10 sm:mx-10 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
       
      </section>
    </>
  );
};

export default OurProcess;
