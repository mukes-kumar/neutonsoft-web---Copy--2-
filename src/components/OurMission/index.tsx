"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';



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

  return (
    <section className="bg-gray-5 dark:bg-gray-700 py-16">
      <div className="container mx-auto px-4 text-center">
        

      </div>
    </section>
  );
}

export default OurMission;