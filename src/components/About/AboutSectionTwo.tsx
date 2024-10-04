import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9  p-2 transition-all ease-in-out delay-250  hover:-translate-y-1  hover:duration-300 hover:ease-linear rounded-md  z-10 
              bg-indigo-0 cursor-pointer hover:bg-gradient-to-t from-indigo-50 via-indigo-100 to-indigo-200 duration-300">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug free code
                </h3>
                <div className="cursor-pointer text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Discover effective strategies to eliminate bugs from your code and ensure high-quality software. Explore best practices for coding, testing, and debugging.
                  {/* <button className="text-red-800">Read more </button> */}
                </div>
              </div>
              <div className="mb-9 p-2 transition-all ease-in-out delay-250  hover:-translate-y-1  hover:duration-300 hover:ease-linear rounded-md  z-10 
              bg-indigo-0 cursor-pointer hover:bg-gradient-to-t from-indigo-50 via-indigo-100 to-indigo-200 duration-300">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1 p-2 transition-all ease-in-out delay-250  hover:-translate-y-1  hover:duration-300 hover:ease-linear rounded-md  z-10 
              bg-indigo-0 cursor-pointer hover:bg-gradient-to-t from-indigo-50 via-indigo-100 to-indigo-200 duration-300">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div>
              <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
                <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">Button Hover</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
