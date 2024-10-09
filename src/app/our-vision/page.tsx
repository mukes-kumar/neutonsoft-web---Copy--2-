import Breadcrumb from "@/components/Common/Breadcrumb";
import OurVision from "@/components/OurVision";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Our-Vision | Transforming Ideas into Innovative Solutions",
  description: "This is Our-Vision | Neutonsoft",
  // other metadata
};

const Services = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 py-10 relative">
        <div className="container mx-auto px-4 relative">
          
          <Image width={140} height={30}
            src="/images/our-vision/ourvision2.jpg"
            alt="Vision Image"
            className="lg:visible invisible w-96 lg:h-72 h-16 object-cover lg:absolute rounded-md top-40 right-1 z-0 opacity-100"  
          />

          <div className="relative z-10"> 
            <Breadcrumb
              pageName="Our Vision"
              description="At Neutonsoft, we are dedicated to transforming your digital ideas into reality through innovative software solutions that drive growth, efficiency, and success. Our team of experienced developers and designers combines modern technology with creative thinking to deliver seamless, scalable, and secure solutions tailored to your business needs."
            />
          </div>
          <Image width={140} height={30}
            src="/images/our-vision/ourvision2.jpg"
            alt="Vision Image"
            className="visible lg:invisible w-96 h-72 object-cover lg:absolute rounded-md top-40 right-1 z-0 opacity-100"  
          />

          <OurVision />
        </div>
      </div>
    </>
  );
};

export default Services;
