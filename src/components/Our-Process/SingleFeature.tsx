import { Feature } from "@/types/feature";
import Image from "next/image";
import Css from "./index.module.css"
import Styles from "../index.module.css";

interface ImageProps {
  icon: string | Element; // Allow both string paths and Element types
}
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  
  return (
    <div className="group w-full shadow-sm hover:shadow-2xl  duration-300 transform hover:scale-105 p-2 transition-all ease-in-out delay-250  hover:-translate-y-1  hover:duration-300 hover:ease-linear rounded-md  z-10 
     bg-indigo-0 cursor-pointer hover:bg-gradient-to-t from-indigo-50 via-indigo-100 to-indigo-200
    ">
      <div className="wow fadeInUp " data-wow-delay=".15s">
        <div className=" mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-md bg-opacity-10 text-indigo-600  transition duration-300
         group-hover:animate-bounce">     
          {icon}
        </div>
        <span className={`${Styles.onlyPara}  text-xl font-bold text-stroke-dark dark:text-black  sm:text-2xl lg:text-xl xl:text-2xl w-[110px]`}>
          {title}<br/>
        </span>
        <p className={`mt-4 pr-[10px] text-base font-medium leading-relaxed text-body-color `}>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
