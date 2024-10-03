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
    title: 'Java Development',
    description: 'Our expert Java developers craft scalable, efficient, and secure applications that align with your business goals.',
    icon: '/images/servicesImg/java.png',
  },
  {
    title: 'Python Development',
    description: 'Our skilled Python developers craft clean, efficient, and scalable applications that meet your specific business needs. From data analysis to web development, we leverage Python versatility to deliver innovative solutions.',
    icon: '/images/servicesImg/python.png',
  },
  {
    title: 'Service 2',
    description: 'Our skilled Python developers craft clean, efficient, and scalable applications that meet your specific business needs. From data analysis to web development, we leverage Python versatility to deliver innovative solutions.',
    icon: '/images/servicesImg/python.png',
  },
  // Add more services as needed
];

const ServicePage = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <div
        className="mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {services.map((service) => (
          <motion.div animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 20, damping: 10 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} key={service.title} className="p-4 bg-white rounded-lg shadow-md">
            <div className="p-4 bg-gray-100 rounded-lg">
              <Image src={service.icon} alt={service.title} className="w-12 h-12 text-blue-500 mx-auto" width={600} height={40} />
            </div>
            <h2 className="text-xl font-bold text-center mt-4">{service.title}</h2>
            <p className="text-gray-700 text-center mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;