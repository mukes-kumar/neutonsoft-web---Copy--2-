"use client"
import Link from "next/link";
import { motion } from 'framer-motion';
import { title } from "process";
import AboutButton from "../About/AboutButton";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {

  
  const titleCont = [
     {titles: "Better and more cost-effective processes"},
     {titles: 'Reductions in cost and time to hire and more control over both'},
     {titles: 'A wider and more engaged network of potential candidates'},
     {titles: 'Enhanced employer brand and corporate reputation'},
     {titles: 'Closer alignment of talent strategy with business strategy'},
  ];

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <>
      <motion.section
        variants={variants}
        initial="hidden"
        animate="show"
        className={`relative z-10 overflow-hidden  ${pageName === "About Us" ? 'pt-40' : 'pt-40 lg:pt-[160px]'}`}>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {pageName}
                </h1>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  {description}
                </p>

              </div>
            </div>
            <div className="md:block hidden w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary">
                    {pageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`${pageName === "About Us" ? 'show' : 'hidden'}`}>
             <AboutButton />
        </div>
        {/* <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${pageName === "About Us" ? 'show' : 'hidden'}`}>
          <div className="pl-12 p-4">
            {/* <h2 className="text-2xl font-bold text-gray-900">About Us</h2> */}
            {/* <p className="text-base font- leading-relaxed text-body-color">NEUTON COMPUTERSOFT PRIVATE LIMITED
              <br />
              At NeutonSoft we help our customers to maximize return and productivity through outsourcing their non-core functions.
              <br />
              In partnering with companies can expect: */} 
              {/* <hr className="w-80 border-b border-gray-300 mt-1" /> */}

              {/* <br />

            </p>
            <div className="ml-10 text-base font- leading-relaxed text-body-color">

              
              <div className="mt-4 lg:mt-4 flex items-center">
                <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
                </span>
                <p>Better and more cost-effective processes</p>
              </div>



              <div className="mt-4 lg:mt-4 flex items-center">
                <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
                </span>
                <p>Reductions in cost and time to hire and more control over both</p>
              </div>

              <div className="mt-4 lg:mt-4 flex items-center">
                <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
                </span>
                <p>A wider and more engaged network of potential candidates</p>
              </div>

              <div className="mt-4 lg:mt-4 flex items-center">
                <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
                </span>
                <p>Enhanced employer brand and corporate reputation</p>
              </div>
              
              <div className="mt-4 lg:mt-4 flex items-center">
                <span className="mr-3 flex h-[10px] w-full max-w-[10px] items-center justify-center rounded-full bg-primary bg-opacity-1 text-primary">
                </span>
                <p>Closer alignment of talent strategy with business strategy</p>
              </div>
             
            </div>
          </div>
          <div className="text- pl-10 p-4">
            <h2 className="text-2xl font-bold text-gray-900">Why NeutonSoft?</h2>
            <p className="text-base font- leading-relaxed text-body-color">
              NEUTON COMPUTERSOFT PRIVATE LIMITED has vast experience providing On-Demand Recruiting Services. On-Demand Recruitment Provides you with the flexibility of choosing when and for how long you need talent acquisition services based on your needs.<br /><br />

              <br /><br />

              <br /><br />
            </p>
          </div>
        </div> */}
        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </motion.section>
    </>
  );
};

export default Breadcrumb;
