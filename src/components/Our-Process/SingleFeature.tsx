import { Feature } from "@/types/feature";
import Image from "next/image";
import styles from "../index.module.css"
// import styles from '../css/LearnCSSModule.module.css'

interface ImageProps {
  icon: string | Element; // Allow both string paths and Element types
}
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full shadow-sm p-2 transition-all ease-in-out delay-250  hover:-translate-y-1  hover:duration-300 hover:ease-linear rounded-md  z-10 
     bg-indigo-0 cursor-pointer hover:bg-gradient-to-t from-indigo-50 via-indigo-100 to-indigo-200 duration-300 
    ">
      <div className="wow fadeInUp " data-wow-delay=".15s">
        <div className=" mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-md bg-opacity-10 text-indigo-600 transition duration-300 hover:rotate-180">

          {/* <Image src={icon} alt="icon" height={40} width={400}/> */}
          {icon}
        </div>
        <h3 className={` mb-1 text-xl font-bold text-stroke-dark dark:text-black  sm:text-2xl lg:text-xl xl:text-2xl`}>
          <p className={styles.hoverunderline}>{title}</p>
          <br />

        </h3>
        <div className={styles.hoverunderline}><div className="pb-[4px] bg-indigo-600 lg:mr-32 mr-[330px] mb-4 rounded-full"></div>
        </div>

        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
