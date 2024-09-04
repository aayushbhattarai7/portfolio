import { useContext } from "react";
import { techStack } from "../../constant/constants";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { motion } from "framer-motion";
import me from '../../assets/images/me.png'
// import GitHubContributions from "../components/GitHubContributions"; // Uncomment if needed

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="about"
      className={`h-screen ${darkMode ? "bg-white" : "bg-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={`text-5xl font-bold px-4 md:px-0 text-center ${
            darkMode ? "" : "text-white"
          }`}
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row mt-12">
          <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-200 md:mr-8 mb-8 md:mb-0">
            <img
              src={me} 
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <motion.div>
              <h4 className="text-3xl font-semibold text-blue-500">
                A bit about me
              </h4>
              <p
                className={`mt-4 text-xl text-justify ${
                  darkMode ? "text-gray-500" : "text-white"
                }`}
              >
                I'm a Full-Stack Developer who loves turning ideas into
                functional web applications. With expertise in Node.js, React,
                TypeScript, and databases like MongoDB, PostgreSQL, and MySQL,
                I’m passionate about building user-friendly and scalable
                solutions. I take pride in writing clean, reusable code and
                ensuring every project meets high standards from start to
                finish.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div>
          <h4 className="mt-7 text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <p
            className={`mt-4 text-xl text-justify ${
              darkMode ? "text-gray-500" : "text-white"
            }`}
          >
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant websites.
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap mt-10 justify-between">
          {techStack.map((el) => (
            <motion.div
              key={el.name}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
              className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
            >
              <img alt={el.name} src={el.link} className="w-12" />
              <h4 className="text-md ml-4">{el.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* <GitHubContributions/> */}
    </div>
  );
};

export default About;
