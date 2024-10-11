"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const AboutHero = () => {

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-[80px] dark:bg-gray-dark  md:pt-[20px] lg:pt-[80px] xl:pt-[0px] "
      >
     
        <motion.div 
        variants={variants}
        initial="hidden"
        animate="show"
        className=" inset-0 z-0">
          <Image src="/images/about/banner.png" alt="" width={900} height={40}  className="lg:flex   object-cover mx-auto max-w-full sm:max-w-[80%]"></Image>
          

          
          {/* <div className="absolute inset-0 bg-black opacity-20"></div>  */}
        </motion.div>

         <div className="relative z-10 container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Home  About Us
                </h1>
                <p className="mb- text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                  Hello
                </p>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </>
  );
};

export default AboutHero;
