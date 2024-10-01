import { Technology } from "@/types/technology";

const technologyData: Technology[] = [
  // Frontend Frameworks
  {
    name: 'ReactJS',
    description: 'A JavaScript library for building user interfaces',
    logo: '/images/techIcon/React.png',
  },
  {
    name: 'Angular',
    description: 'A TypeScript-based open-source web application framework',
    logo: '/images/techIcon/Angular.png',
  },
  {
    name: 'VueJS',
    description: 'A progressive JavaScript framework for building user interfaces',
    logo: '/images/techIcon/Vue.js.png',
  },
  {
    name: 'Bootstrap',
    description: 'A free and open-source CSS framework directed at responsive, mobile-first front-end web development',
    logo: '/images/techIcon/Bootstrap.png',
  },
  {
    name: 'TailwindCSS',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces',
    logo: '/images/techIcon/Tailwind-CSS.png',
  },
  {
    name: 'JavaScript',
    description: 'A high-level, interpreted programming language that is core to web development',
    logo: '/images/techIcon/JavaScript.png',
  },
  {
    name: 'TypeScript',
    description: 'A superset of JavaScript that adds static typing',
    logo: '/images/techIcon/TypeScript.png',
  },
  {
    name: 'HTML / HTML5',
    description: 'A markup language used for structuring and presenting content on the World Wide Web',
    logo: '/images/techIcon/HTML5.png',
  },
  {
    name: 'CSS / CSS3',
    description: 'A style sheet language used for describing the presentation of a document written in a markup language',
    logo: '/images/techIcon/CSS3.png',
  },
  {
    name: 'SCSS',
    description: 'A preprocessor scripting language that is interpreted or compiled into CSS',
    logo: '/images/techIcon/CSS3.png',
  },

  // Backend and Server Technologies
  {
    name: 'NodeJS',
    description: 'A JavaScript runtime built on Chrome\'s V8 engine',
    logo: '/images/techIcon/Node.JS.png',
  },
  {
    name: 'PHP',
    description: 'A general-purpose scripting language especially suited to web development',
    logo: '/images/techIcon/PHP.png',
  },
  {
    name: 'Laravel',
    description: 'A PHP framework for building web applications following the model–view–controller (MVC) architectural pattern',
    logo: '/images/techIcon/Laravel.png',
  },
  {
    name: 'ExpressJS',
    description: 'A minimal and flexible Node.js web application framework',
    logo: '/images/techIcon/Express.png',
  },
  {
    name: 'Django',
    description: 'A high-level Python Web framework that encourages rapid development and clean, pragmatic design',
    logo: '/images/techIcon/Django.png',
  },
  {
    name: 'Spring Boot',
    description: 'An open-source Java-based framework used to create a microservice',
    logo: '/images/techIcon/Spring.png',
  },

  // Mobile Development
  {
    name: 'React Native',
    description: 'A framework for building native apps using React',
    logo: '/images/techIcon/React.png',
  },
  {
    name: 'Flutter',
    description: 'A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase',
    logo: '/images/techIcon/Flutter.png',
  },
  {
    name: 'Ionic',
    description: 'A complete open-source SDK for hybrid mobile app development',
    logo: '/images/techIcon/Ionic.png',
  },
  // {
  //   name: 'Cordova / Phonegap',
  //   description: 'A mobile application development framework',
  //   logo: '/images/techIcon/Cordova.png',
  // },
  {
    name: 'Swift',
    description: 'A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS',
    logo: '/images/techIcon/Swift.png',
  },
  {
    name: 'Kotlin',
    description: 'A cross-platform, statically typed, general-purpose programming language with type inference',
    logo: '/images/techIcon/Kotlin.png',
  },

  // Cloud Platforms
  {
    name: 'AWS',
    description: 'Amazon Web Services, a comprehensive cloud computing platform',
    logo: '/images/techIcon/AWS.png',
  },
  {
    name: 'Microsoft Azure',
    description: 'Microsoft\'s cloud platform for building, testing, and managing applications and services',
    logo: '/images/techIcon/Azure.png',
  },
  {
    name: 'Google Cloud Platform (GCP)',
    description: 'Google\'s suite of cloud computing services',
    logo: '/images/techIcon/Google-Cloud.png',
  },
  {
    name: 'Firebase',
    description: 'A platform developed by Google for creating mobile and web applications',
    logo: '/images/techIcon/Firebase.png',
  },
  {
    name: 'Heroku',
    description: 'A cloud platform as a service supporting several programming languages',
    logo: '/images/techIcon/Heroku.png',
  },
  {
    name: 'Docker',
    description: 'A platform for developing, shipping, and running applications in containers',
    logo: '/images/techIcon/Docker.png',
  },
  {
    name: 'Kubernetes',
    description: 'An open-source system for automating the deployment, scaling, and management of containerized applications',
    logo: '/images/techIcon/Kubernetes.png',
  },

  // Databases
  {
    name: 'MySQL',
    description: 'An open-source relational database management system',
    logo: '/images/techIcon/MySQL.png',
  },
  {
    name: 'PostgreSQL',
    description: 'A powerful, open-source object-relational database system',
    logo: '/images/techIcon/PostgresSQL.png',
  },
  {
    name: 'MongoDB',
    description: 'A NoSQL database program that uses JSON-like documents',
    logo: '/images/techIcon/MongoDB.png',
  },
  {
    name: 'Redis',
    description: 'An open-source, in-memory data structure store, used as a database, cache, and message broker',
    logo: '/images/techIcon/Redis.png',
  },
  {
    name: 'SQL Server',
    description: 'A relational database management system developed by Microsoft',
    logo: '/images/techIcon/Microsoft-SQL-Server.png',
  },
  {
    name: 'Firebase Database',
    description: 'A real-time NoSQL database built for the cloud',
    logo: '/images/techIcon/Firebase.png',
  },

  // Version Control & CI/CD
  {
    name: 'Git / GitHub',
    description: 'A distributed version-control system for tracking changes in source code during software development',
    logo: '/images/techIcon/GitHub.png',
  },
  {
    name: 'GitLab',
    description: 'A web-based DevOps lifecycle tool that provides a Git repository manager',
    logo: '/images/techIcon/GitLab.png',
  },
  {
    name: 'Jenkins',
    description: 'An open-source automation server that helps automate the non-human part of the software development process',
    logo: '/images/techIcon/Jenkins.png',
  },
  {
    name: 'CircleCI',
    description: 'A continuous integration and delivery platform for DevOps teams',
    logo: '/images/techIcon/CircleCI.png',
  },

  // Other Tools & Technologies
  {
    name: 'NPM',
    description: 'A package manager for the JavaScript programming language',
    logo: '/images/techIcon/NPM.png',
  },
  {
    name: 'Webpack',
    description: 'An open-source JavaScript module bundler',
    logo: '/images/techIcon/Webpack.png',
  },
  {
    name: 'Figma',
    description: 'A web-based vector graphics editor and prototyping tool',
    logo: '/images/techIcon/Figma.png',
  },
  {
    name: 'Adobe XD',
    description: 'A vector-based user experience design tool for web apps and mobile apps',
    logo: '/images/techIcon/Adobe-XD.png',
  },
  {
    name: 'Sketch',
    description: 'A digital design app for macOS',
    logo: '/images/techIcon/Sketch.png',
  },
  {
    name: 'Adobe Photoshop',
    description: 'A raster graphics editor developed and published by Adobe',
    logo: '/images/techIcon/Adobe-Photoshop.png',
  },
  {
    name: 'REST API',
    description: 'A software architectural style that defines a set of constraints to be used for creating web services',
    logo: '/images/techIcon/OpenAPI.png',
  },
  {
    name: 'GraphQL',
    description: 'A query language for APIs and a runtime for executing those queries',
    logo: '/images/techIcon/GraphQL.png',
  }
];

export default technologyData;
