"use client"
import Link from "next/link";
import { useEffect } from "react";
// import ScrollReveal from 'scrollreveal';





const Hero = () => {

  // const sr = ScrollReveal({
  //   distance: '60px',
  //   duration: 2500,
  //   delay: 400,
  //   // reset: true
  // });

  // useEffect(() => {
  //   sr.reveal('.home__header, .section__title', { delay: 600 });
  //   sr.reveal('.home__footer', { delay: 700 });
  //   sr.reveal('.home__img', { delay: 900, origin: 'top' });

  //   sr.reveal('.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy', { origin: 'top', interval: 100 });
  //   sr.reveal('.specs__data, .discount__animate', { origin: 'left', interval: 100 });
  //   sr.reveal('.specs__img, .discount__img', { origin: 'right' });
  //   sr.reveal('.case__img', { origin: 'top' });
  //   sr.reveal('.case__data');
  // }, );

  return (

    
    <>
      <section
        id="home"
        className="home__header relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >

        <div className=" absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src="/images/video/Hero_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        
        
          </video>
          <div className="absolute inset-0 bg-slate-800 opacity-20"></div>
        </div>

        <div className="section__title relative z-10 container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Digital Transformation and IT Consulting Services
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                  Neutonsoft delivers end-to-end digital transformation solutions and technology services, ranging from ideation to designing and from development to deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
