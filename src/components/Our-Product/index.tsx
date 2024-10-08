import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const OurProductPage = () => {
  return (
    <>
      <section id="features" className="py-5 md:py-5 lg:py-5">
        <div className="container">
          <SectionTitle
            title="Expolre Our Products"
            paragraph="Expert Web and Mobile Application Development Services to Elevate Your Business"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
       
      </section>
    </>
  );
};

export default OurProductPage;
