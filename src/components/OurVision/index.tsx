"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function OurVision() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Vision</h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-16">
          At NeutonSoft, we envision a world where technology empowers businesses and individuals to achieve their full potential. Our passion lies in crafting innovative software and web solutions that drive growth, streamline processes, and enhance user experiences.
        </p>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative inline-block w-96 h-60 [340px] mx-auto mb-8"
        >
          <Image
            src="/images/our-vision/OurVision.jpg" // Replace with your image path
            alt="Our Vision"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </motion.div>
        <p className="text-lg text-gray-700 dark:text-gray-400">
          We strive to be at the forefront of technological advancements, leveraging the latest tools and methodologies to deliver cutting-edge solutions. By combining our technical expertise with a deep understanding of our clients needs, we aim to build lasting partnerships and exceed expectations.
        </p>
      </div>
    </section>
  );
}

export default OurVision;