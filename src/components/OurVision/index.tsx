"use client";
import { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
import Vision from "../Data/Vision.json"; // Imported vision data

function OurVision() {
  const [isHovered, setIsHovered] = useState(false);

  // Assign Vision data to values array
  const values = Vision;

  return (
    <section className="bg-gray-100 dark:bg-gray-800 pt-24">
      
      <div className='text-center p-10 font-serif font-bold text-4xl'>
        <h1
          // style={{
          //   backgroundImage:
          //     "linear-gradient(43deg, #415800 0%, #C850C8 46%, #FFCC70 100%)",
          //   WebkitBackgroundClip: "text",
          //   color: "transparent",
          // }}
        >
          Our Vision
        </h1>

        {/* Vision in boxes */}
        <div className="grid md:grid-cols-2 gap-8 pt-11">
          {values.map((value, index) => (
           <div
           key={index}
           className="group shadow-lg text-center hover:bg-blue-500 hover:text-white duration-1000 p-6 bg-white rounded-lg  hover:scale-105 hover:shadow-xl  "
         >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 duration-1000 group-hover:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 font-thin text-sm group-hover:text-white duration-1000">{value.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default OurVision;

