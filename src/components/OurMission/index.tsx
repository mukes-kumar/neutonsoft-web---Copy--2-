"use client"

import Vision from "../Data/Vision.json"; // Imported vision data



interface StyleProps {
  color: string;
}

function OurMission() {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const styles: StyleProps = {
    color: 'transparent',
  };

  // Assign Vision data to values array
  const values = Vision;

  return (
    <section className="bg-gray-100 dark:bg-gray-800 lg:pt-28">
      <div className="container mx-auto px-4 text-center">

        <div className='text-center p-10 font-serif font-bold text-4xl'>
          <h1
          // style={{
          //   backgroundImage:
          //     "linear-gradient(43deg, #415800 0%, #C850C8 46%, #FFCC70 100%)",
          //   WebkitBackgroundClip: "text",
          //   color: "transparent",
          // }}
          >
            Our Mission
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
      </div>
    </section>
  );
}

export default OurMission;