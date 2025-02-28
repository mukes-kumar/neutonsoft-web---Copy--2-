import Technologies from "@/components/Technology";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import AboveFooter from "@/components/Footer/AboveFooter";

export const metadata: Metadata = {
  title: "Technology | Transforming Ideas into Innovative Solutions",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Technology = () => {
  return (
    <>
        <Breadcrumb
          pageName="Technology"
          description="Explore the evolving landscape of technology, where innovation meets everyday life. Delve into the core of cutting-edge advancements shaping our future, with insights into development and functionality."
        />
      <section className="pb-[60px] pt-[60px]">
        <div className="container">
          <Technologies />
        </div>
      </section>
      <AboveFooter/>
    </>
  );
};

export default Technology;
