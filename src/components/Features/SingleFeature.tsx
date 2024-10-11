import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full shadow-sm hover:shadow-2xl  duration-500 transform hover:scale- p-2 transition-all ease-in-out delay-250  hover:-translate-y-1  hover:duration-500 hover:ease-linear rounded-md  z-10 
     bg-indigo-0 cursor-pointer hover:bg-gradient-to-t from-indigo-50 via-indigo-100 to-indigo-200  
    ">
      <div className="wow fadeInUp group" data-wow-delay=".15s">
        <div className=" mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <div className="group-hover:rotate-180 transition ease-in-out duration-500">{icon}
          </div>
        </div>
        <h3 className="mb-5 text-xl font-bold text-stroke-dark dark:text-black  sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
