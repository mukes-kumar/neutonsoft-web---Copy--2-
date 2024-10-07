import Breadcrumb from "@/components/Common/Breadcrumb";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our-Mission | Transforming Ideas into Innovative Solutions",
  description: "our-mission | Neutonsoft",
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
