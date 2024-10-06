import technologyData from './technologyData'; // Import the data
import Image from 'next/image';

const Technologies = () => {
  return (
    <div className="technologies-section">
      <h2 className="section-title">Technologies We Use</h2>
      <div className="technologies-grid">
        {technologyData.map((tech, index) => (
          <div className="technology-card w-full shadow-sm p-2 transition-all ease-in-out delay-250  hover:-translate-y-1  hover:duration-300 hover:ease-linear rounded-md  z-10 
          bg-indigo-0 cursor-pointer hover:bg-gradient-to-t from-indigo-50 via-indigo-100 to-indigo-200 duration-300 " key={index}>
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              width={100}
              height={100}
              className="tech-logo"
            />
            <h3 style={{ color: 'black' }}>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
