"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// import Link from "next/link";
import { useEffect } from "react";
// import ScrollReveal from 'scrollreveal';


const ServiceHero = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };
  return (

    
    <>
      <section
        id="home"
      className="home__header relative z-10 overflow bg-white sm:pt-[360px] pt-[290px] dark:bg-gray-dark md:pb-[0px] md:pt-[450px] xl:pb-[0px] xl:pt-[450px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >

        <div className=" absolute inset-0 z-0">
        <motion.div 
        variants={variants}
        initial="hidden"
        animate="show"
        className=" inset-0 z-0 w-full  mt-24 lg:mt-0 ">
          <Image src="/images/about/Software.jpg" alt="" width={900} height={40}  className="w-full xl:h-[600px]"></Image>
          
          <div className="absolute inset-0 bg-black opacity-20"></div> 
        </motion.div>
          <div className="absolute inset-0 bg-slate-800 opacity-20"></div>
        </div>

        <div className="section__title relative z-10 container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                
                <Link href="/" className="mb-12 text-base !leading-relaxed animate-pulse text-slate-100 sm:text-lg md:text-sm font-bold hover:text-blue-800">
                  Home 
                </Link>
                <span className="mr-3 ml-2 h-2 w-2 rotate-45 border-r-2 border-t-2 border-white"></span>
                <span className="font-bold text-sm text-white">Services
                </span>
                <p className="text-sm !leading-relaxed animate-pulse text-yellow sm:text-md md:text-xl font-bold shadow-lg">
                We are a Technology, Consulting and Outsourcing company delivering end to end IT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHero;

