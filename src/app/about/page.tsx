import AboutButton from "@/components/About/AboutButton";
import AboutHero from "@/components/About/AboutHero";
// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboveFooter from "@/components/Footer/AboveFooter";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Transforming Ideas into Innovative Solutions",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <AboutHero /> */}
      
      <Breadcrumb 
        pageName="About Us"
        description="We are a Technology, Consulting
            and Outsourcing company
            delivering end to end IT solutions."
      />
      <div>
          <AboutButton />
      </div>
      <AboveFooter/>
    </>
  );
};

export default AboutPage;
