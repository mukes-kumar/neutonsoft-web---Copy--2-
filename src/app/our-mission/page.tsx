import Breadcrumb from "@/components/Common/Breadcrumb";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const Services = () => {
  return (
    <>
        <Breadcrumb
          pageName="Our Company Mission"
          description="Empowering businesses with innovative software solutions that drive growth and efficiency.
          Your technology partner for transformative digital solutions."
        />
      <OurMission />
    </>
  );
};

export default Services;
