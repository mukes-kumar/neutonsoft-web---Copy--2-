"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Vision from "../Data/Vision.json"; // Imported vision data

function OurVision() {
  const [isHovered, setIsHovered] = useState(false);

  // Assign Vision data to values array
  const values = Vision;

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Vision</h2>
        <p className="text-lg font-serif italic text-gray-700 dark:text-gray-400 mb-16">
        At NeutonSoft, we envision a world where technology empowers businesses and individuals to achieve their full potential. Our passion lies in crafting innovative software and web solutions that drive growth, streamline processes, and enhance user experiences.
        </p>

        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative inline-block w-96 h-60 mx-auto mb-8"
        >
          <Image
            src="/images/our-vision/OurVision.jpg" 
            alt="Our Vision"
            fill
            className="rounded-full object-cover"
          />
        </motion.div>

        <p className="text-lg font-serif Garamond text-gray-700 dark:text-gray-400">
          We strive to be at the forefront of technological advancements, leveraging the latest tools and methodologies to deliver cutting-edge solutions. By combining our technical expertise with a deep understanding of our clients' needs, we aim to build lasting partnerships and exceed expectations.
        </p>
      </div>

      <div className='text-center p-10 font-serif font-bold text-4xl'>
        <h1
          style={{
            backgroundImage:
              "linear-gradient(43deg, #415800 0%, #C850C8 46%, #FFCC70 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Vision
        </h1>

        {/* Vision in boxes */}
        <div className="grid md:grid-cols-2 gap-8 pt-11">
          {values.map((value, index) => (
           <div
           key={index}
           className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-500 delay-200 duration-300 "
         >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 font-thin text-sm hover:text-white">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurVision;

