"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

function OurMission() {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Mission</h2>
        <motion.p
          variants={variants}
          initial="hidden"
          animate="show"
          className="text-lg text-gray-700 dark:text-gray-400 mb-16"
        >
          At NeutonSoft, we are committed to empowering businesses and individuals through innovative software solutions. Our mission is to deliver exceptional technology that drives growth, efficiency, and success. We strive to create a positive impact on the world by providing cutting-edge solutions that address real-world challenges.
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="relative inline-block w-64 h-64 mx-auto mb-8"
        >
          <Image
            src="/images/our-mission/mission.jpg" // Replace with your image path
            alt="Our Mission"
            className="rounded-full"
          width={140} height={40}/>
        </motion.div>
        <motion.p
          variants={variants}
          initial="hidden"
          animate="show"
          className="text-lg text-gray-700 dark:text-gray-400"
        >
          We believe in building strong partnerships with our clients, understanding their unique needs, and tailoring our solutions to meet their specific requirements. Our team of talented professionals is dedicated to delivering the highest quality software, combined with exceptional customer service.
        </motion.p>
      </div>
    </section>
  );
}

export default OurMission;