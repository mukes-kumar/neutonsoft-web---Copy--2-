import technologyData from './technologyData'; // Import the data
import Image from 'next/image';

const Technologies = () => {
  return (
    <div className="technologies-section">
      <h2 className="section-title">Technologies We Use</h2>
      <div className="technologies-grid">
        {technologyData.map((tech, index) => (
          <div className="technology-card" key={index}>
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              width={100}
              height={100}
              className="tech-logo"
            />
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
