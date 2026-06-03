export const ABOUT = {
  title: "About Me",
  description:
    "Hi, I'm Ronald, a Quality Engineer at StackAdapt, where I help ensure the delivery of high-quality software. I hold a degree in Computer Science from The University of British Columbia, which gives me a strong technical foundation for working closely with developers and systems.",
  linkedin: "https://www.linkedin.com/in/ronald-chan-info/",
  github: "https://github.com/ronalldchan",
};

export const EXPERIENCE = {
  stackadapt: {
    jobTitle: "Quality Engineer",
    company: "StackAdapt",
    companyLink: "https://www.stackadapt.com/",
    startDate: "May 2025",
    endDate: "Present",
    description: [
      "Reduced production defects by identifying and reproducing bugs with engineers during feature development and validation, resulting in fewer issues reaching release.",
      "Improved test coverage for new features by preparing test environments, organizing bug hunts, and contributing to team-owned test suites, resulting in earlier detection of functional issues.",
      "Supported on-time feature releases by collaborating with product managers to validate requirements and test readiness, resulting in smoother and more predictable launches.",
    ],
    color: "#0061ff",
  },
  operto: {
    jobTitle: "Quality Assurance Engineer Co-op",
    company: "Operto Guest Technologies",
    companyLink: "https://operto.com/",
    startDate: "May 2023",
    endDate: "Dec 2023",
    description: [
      "Built a scalable E2E test automation framework from scratch using Playwright and TypeScript, reducing reliance on manual regression testing and enabling maintainable E2E test coverage.",
      "Streamlined deployment processes by integrating E2E test automation into the CI/CD pipeline, resulting in faster, more reliable releases and minimizing deployment errors.",
      "Collaborated with developers and product managers to validate tickets for release, verify functionality, and develop regression test cases, ensuring comprehensive test coverage and smooth release cycles.",
    ],
    color: "#000000",
  },
  visier: {
    jobTitle: "Test Developer Co-op",
    company: "Visier Inc.",
    companyLink: "https://www.visier.com/",
    startDate: "Jan 2022",
    endDate: "Aug 2022",
    description: [
      "Developed a real-time test reporting system, enabling faster failure triaging and reducing developer downtime, resulting in improved test debugging efficiency and expedited issue resolution.",
      "Optimized E2E test execution by 50% through strategic test data management, parallelization, and environment configuration, accelerating development cycles.",
      "Designed and executed manual and automated test cases for unit, integration, and end-to-end testing, enhancing software quality and reducing production defects.",
    ],
    color: "#1d8187",
  },
};

export const PROJECTS = {
  effectiveTests: {
    title: "Effective Tests",
    subtitle: "Java, ANTLR, Gradle",
    description: [
      "Developed an IDE extension tool that combines static and dynamic analysis to enhance test coverage test coverage metrics, supporting test-driven development and QA validation workflows.",
      "Innovated a unique test coverage metric to detect unvalidated method side effects, addressing gaps left in traditional test methodologies.",
      "Implemented static analysis logic to quantify assertion coverage and highlight untested code.",
    ],
    image: "/projects/effective_tests.png",
    github: "https://github.com/ronalldchan/effective-tests",
  },
  folderDSL: {
    title: "Folder DSL",
    subtitle: "Java, ANTLR",
    description: [
      "Designed a domain specific language to automate and simplify file organization workflows.",
      "Developed support for advanced language features including conditionals, macros, loops, and mutable variables for dynamic scripting.",
      "Transformed parsed AST nodes into executable logic to support runtime behavior for the DSL.",
    ],
    image: "/projects/dsl.png",
    github: "https://github.com/ronalldchan/fldr-dsl",
  },
  ubcNotes: {
    title: "UBC Notes",
    subtitle: "TypeScript, Firebase, React, Material UI",
    description: [
      "Built a web application during a 12-hour hackathon for students to upload, organize, and share course notes using React and MUI.",
      "Integrated Google Firebase for backend infrastructure, handling file storage and API endpoints.",
    ],
    image: "/projects/ubcnotes.png",
    github: "https://github.com/ronalldchan/UBC-Notes",
    details: "https://devpost.com/software/ubc-notes",
  },
  portfolioWebsite: {
    title: "Portfolio Website",
    subtitle: "TypeScript, React, Material UI",
    description: [
      "My website that you are looking at now!",
      "Created with TypeScript, React, and Material UI.",
    ],
    image: "/projects/website.png",
    github: "https://github.com/ronalldchan/ronalldchan.github.io",
  },
  translinkDB: {
    title: "Translink Database App",
    subtitle: "SQL, HTML, PHP",
    description: [
      "A SQL database based on the TransLink transportation network.",
      "Allows users to add, remove, and query data regarding the network via a HTML and PHP frontend.",
    ],
    image: "/projects/translinkdb.png",
    github: "https://github.com/ronalldchan/Translink-Database",
  },
};
