import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import ServicePage from "@/components/Servicess";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const Services = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        description="At Neutonsoft, we develop advanced software products that are well designed, coded to high standards, and well-tested. We ensure flawless
        communication & provide regular updates. "
      />
      <Features />
    </>
  );
};

export default Services;
