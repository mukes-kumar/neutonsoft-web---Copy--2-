import Link from "next/link";

const AboutHero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[80px] dark:bg-gray-dark md:pb-[0px] md:pt-[90px] xl:pb-[0px] xl:pt-[80px] 2xl:pb-[0px] 2xl:pt-[210px]"
      >
     
        <div className=" inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="lg:flex  hidden w-90  object-cover"
          >
            <source src="/images/video/AboutPageVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            autoPlay
            muted
            loop
            className="md:hidden  w-full h-full  object-cover"
          >
            <source src="/images/video/AboutVideo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            autoPlay
            muted
            loop
            className="md:block hidden lg:hidden w-90  object-cover"
          >
            <source src="/images/video/AboutPageVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          {/* <div className="absolute inset-0 bg-black opacity-20"></div>  */}
        </div>

        {/* <div className="relative z-10 container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                  .
                </p>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default AboutHero;
