import { useContext } from "react";
import Card from "../../ui/molecules/Card";
import { ThemeContext } from "../../contexts/ThemeProvider";

// Import local images
import projectImage1 from "../../assets/images/logo.png";
// import projectImage2 from "../assets/images/project2.png";
// import projectImage3 from "../assets/images/project3.png";
// import projectImage4 from "../assets/images/project4.png";
// import projectImage5 from "../assets/images/project5.png";

const Projects: React.FC = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={`min-h-screen ${
        darkMode ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold text-center">Projects</h2>
        <h4 className="mt-8 text-3xl font-semibold text-blue-600 text-center">
          What I Built
        </h4>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Connect Heart Social Media app"
            description="Connect Heart is a React and Node.js app with TypeScript that offers user profiles, post sharing, likes, comments, and connection management. It features OTP verification, password updates, language toggling (English/Nepali), and dark/light themes. Real-time messaging and unread counts are supported with Socket.IO, and Google login is integrated for easy sign-in."
            imageSrc={projectImage1}
            link="#"
            githubLink="https://github.com/username/project1"
          />
          {/* <Card
            title="Project 2"
            description="A brief description of Project 2."
            imageSrc={projectImage2} // Use local image
            link="#"
            githubLink="https://github.com/username/project2"
          />
          <Card
            title="Project 3"
            description="A brief description of Project 3."
            imageSrc={projectImage3} // Use local image
            link="#"
            githubLink="https://github.com/username/project3"
          />
          <Card
            title="Project 4"
            description="A brief description of Project 4."
            imageSrc={projectImage4} // Use local image
            link="#"
            githubLink="https://github.com/username/project4"
          />
          <Card
            title="Project 5"
            description="A brief description of Project 5."
            imageSrc={projectImage5} // Use local image
            link="#"
            githubLink="https://github.com/username/project5"
          /> */}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/projects"
            className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show More
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
