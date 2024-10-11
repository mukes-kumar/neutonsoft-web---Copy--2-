"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: string;
}


const ServicePage = () => {

  const data = [
    {name:"Software Development"},
    {name:"Automatic Optimization"},
    {name:"Applicatication Services"},
    {name:"IT Security Services"},
    {name:"Data Analytics"},
    {name:"System Integration Service"},
    {name:"Help Desk Services"},
    {name:"API Integration Service"},
    {name:"Salesforce Integration Service"},
    {name:"ERP Integration Service"},
    {name:"Mobile Apps Development"},
  ]

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className='container lg:mt-28'>
        <div className='grid lg:grid-cols-2 grid-rows-1'>
          <div className=''>
            <div className='flex flex-wrap flex-col'>
              <p className='text-indigo-600'>Our All Services </p>
              <h1 className='md:text-4xl text-2xl text-slate-800 font-bold my-3'>Software Development Services
              </h1>
              <p className='text-body-color font-serif'>At Neutonsoft, we develop advanced software products that are well-designed, coded to high standards, and well-tested. We ensure flawless communication & provide regular updates.</p>

              <p className='text-body-color font-serif mt-3'>Software development services is your possibility to outsource software engineering and support, and get maintainable, secure and impactful software at the best price. To date, Tito Softwares has fulfilled 100+ projects and offers vast experience in different programming techs and software types.</p>
            </div>
            <section className="py-12">
              <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* <!-- Card 1 --> */}
                {
                  data.map((name, index)=>(
                    <div key={index} className="bg-indigo-100 p-4 rounded-lg  hover:shadow- hover:bg-blue-600 transition duration-1000 hover:text-white transform hover:scale-">
                  <h2 className="text-base ">{name.name}</h2>
                </div>
                  ))
                }                    
              </div>
            </section>
          </div>
          <div className=" ">
            <div className="">
              <Image alt=' img' loading="lazy" width={400} height="40"
                className="w-full"
                src="/images/about/footer.png" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;