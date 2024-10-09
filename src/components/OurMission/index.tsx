"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Vision from "../Data/Vision.json"; // Imported vision data



interface StyleProps {
  color: string;
}

function OurMission() {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };



  const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  });

  useEffect(() => {
    sr.reveal('.home__header, .section__title', { delay: 600 });
    sr.reveal('.home__footer', { delay: 700 });
    sr.reveal('.home__img', { delay: 900, origin: 'top' });

    sr.reveal('.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy', { origin: 'top', interval: 100 });
    sr.reveal('.specs__data, .discount__animate', { origin: 'left', interval: 100 });
    sr.reveal('.specs__img, .discount__img', { origin: 'right' });
    sr.reveal('.case__img', { origin: 'top' });
    sr.reveal('.case__data');
  },);

  const styles: StyleProps = {
    color:'transparent',
  };

    // Assign Vision data to values array
    const values = Vision;

  return (
    <section className="bg-gray-5 dark:bg-gray-700 py-16">
      <div className="container mx-auto px-4 text-center">
        
      <div className='text-center p-10 font-serif font-bold text-4xl'>
        <h1
          style={{
            backgroundImage:
              "linear-gradient(43deg, #415800 0%, #C850C8 46%, #FFCC70 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Mission
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
      </div>
    </section>
  );
}

export default OurMission;