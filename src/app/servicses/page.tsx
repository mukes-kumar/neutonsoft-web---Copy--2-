import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
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
      <div className="mt-20">
        <Breadcrumb
          pageName="Services Page"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />
      </div>
      <ServicePage />
    </>
  );
};

export default Services;
