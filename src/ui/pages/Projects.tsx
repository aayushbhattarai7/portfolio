import { useContext } from "react";
import Card from "../../ui/molecules/Card";
import { ThemeContext } from "../../contexts/ThemeProvider";

// Import local images
import projectImage1 from "../../assets/images/logo.png";
import daalBhat from "../../assets/images/Logodb.png";
import headphone from "../../assets/images/Screenshot from 2024-09-15 15-57-19.png";

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
            githubLink="https://github.com/aayushbhattarai7/ConnectHeart-Backend"
          />
          <Card
            title="Food delivery app"
            description="An online food ordering and delivery app designed specifically for a single restaurant, simplifying the ordering process for customers while helping the restaurant manage orders efficiently. Built using EJS for dynamic templating and CSS for styling, the app features a user-friendly interface that enhances the customer experience. The backend, powered by Node.js, ensures a robust system for handling orders and managing the restaurant’s operations smoothly. This solution streamlines the food ordering and delivery process, making it easier for both the restaurant and its customers."
            imageSrc={daalBhat}
            link="#"
            githubLink="https://github.com/aayushbhattarai7/FoodDelivery"
          />

          <Card
            title="Headphone Ecommerce webapp"
            description="I developed a responsive website specifically for selling headphones, making it easy for users to browse and purchase products. The site efficiently manages product listings, user accounts, and transactions, ensuring a smooth shopping experience for customers. I focused on enhancing performance and user satisfaction, ensuring that the website runs smoothly across different devices. The project was built using JSP and Java Servlets for handling the backend, with MySQL managing the database, providing a solid foundation for storing and retrieving product and user information."
            imageSrc={headphone}
            link="#"
            githubLink="https://github.com/aayushbhattarai7/Headphone-Ecommerce"
          />
          {/*
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
      
      </div>
    </div>
  );
};

export default Projects;
