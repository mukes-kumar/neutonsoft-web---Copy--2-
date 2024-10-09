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
        <div className="container mx-auto py-16">
          {/* Your mission page content here */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h1>
            <p className="text-lg text-gray-500 max-w-md text-center">
              Our mission is to [Your mission statement]
            </p>
          </div>
          <div className="relative">
            <Image src="/mission-image.jpg" alt="Mission Image" className="w-full h-auto animate-pulse" width={140} height={40} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 animate-fadeIn"></div>
          </div>

        </div>
        <div className="relative">
          <Image src="/mission-image.jpg" alt="Mission Image" className="w-full h-auto animate-pulse" width={140} height={40} />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 animate-fadeIn">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl font-bold text-white">Our Values</h2>
              <ul className="mt-8">
                <li className="text-lg text-white animate-fadeInUp delay-100">Value 1</li>
                <li className="text-lg text-white animate-fadeInUp delay-200">Value 2</li>
                <li className="text-lg text-white animate-fadeInUp delay-300">Value 3</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OurMission;