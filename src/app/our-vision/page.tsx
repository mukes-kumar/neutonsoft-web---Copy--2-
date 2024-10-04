import Breadcrumb from "@/components/Common/Breadcrumb";
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
          pageName="Our Vision"
          description="Create exceptional software and web applications that solve real-world problems and deliver tangible value.
          Foster a culture of innovation and continuous learning to stay ahead of industry trends.
          Establish ourselves as a trusted partner for businesses seeking reliable and scalable technology solutions.
          Make a positive impact on our clients, our community, and the world through our work.."
        />
      <OurVision />
    </>
  );
};

export default Services;
