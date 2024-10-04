"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Mobile App Development',
    description: 'Build secure, scalable, appreciative and performing applications with advanced technologies on variousplatforms',
    icon: '/images/servicesImg/java.png',
  },
  {
    title: 'Web Development',
    description: 'We build the website of your idea. To give a boost and success to your business in the Market',
    icon: '/images/servicesImg/python.png',
  },
  {
    title: 'Cloud Integration & Development',
    description: 'Provides End to End cloud integration services on Oracle Cloud, Azure Cloud, Google Cloud, and AWS Cloud Platforms.',
    icon: '/images/servicesImg/python.png',
  },

  {
    title: 'IT Outsourcing & IT Consulting',
    description: 'We at Neutonsoft help you in getting the results and solutions for your business projects with customized features.',
    icon: '/images/servicesImg/python.png',
  },
  // Add more services as needed
];

const ServicePage = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">

      <div
        className="mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
      >
        {services.map((service) => (
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} key={service.title} className="hover:relative hover:bg-red-500 p-4 transform bg-white rounded-lg shadow-md">
            <div className="p-4 bg-gray-100 rounded-lg">
              <Image src={service.icon} alt={service.title} className="w-12 h-12 text-blue-500 mx-auto" width={600} height={40} />
            </div>
            <h2 className="text-xl font-bold text-center mt-4">{service.title}</h2>
            <p className="text-gray-700 text-center mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;