import Technologies from "@/components/Technology";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Technology = () => {
  return (
    <>
      <div className="mt-16">
        <Breadcrumb
          pageName="Technology"
          description="Explore the evolving landscape of technology, where innovation meets everyday life. Delve into the core of cutting-edge advancements shaping our future, with insights into development and functionality."
        />
      </div>
      <section className="pb-[60px] pt-[60px]">
        <div className="container">
          <Technologies />
        </div>
      </section>
    </>
  );
};

export default Technology;
