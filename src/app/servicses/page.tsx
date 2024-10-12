import AboutButton from "@/components/About/AboutButton";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import AboveFooter from "@/components/Footer/AboveFooter";
import ServicePage from "@/components/Servicess";
import ServicesAnimate from "@/components/Servicess/AnimateServices";
import AnimateServices from "@/components/Servicess/AnimateServices";
import ServiceFeatures from "@/components/Servicess/ExpolreService";
import ServiceHero from "@/components/Servicess/ServiceHero";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Transforming Ideas into Innovative Solutions",
  description: "This is Services at Neutonsoft",
  // other metadata
};

const Services = () => {
  return (
    <>
      <ServiceHero />
      {/* <Breadcrumb
        pageName="Our Services"
        description="At Neutonsoft, we develop advanced software products that are well designed, coded to high standards, and well-tested. We ensure flawless
        communication & provide regular updates. "
      /> */}
      <ServicePage/>
      <ServiceFeatures/>
      <AboveFooter/>
      {/* <ServicesAnimate /> */}
    </>
  );
};

export default Services;
