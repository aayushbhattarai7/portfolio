import { useContext } from "react";
import { motion } from "framer-motion";
import { contactLinks } from "../../constant/constants";
import { ThemeContext } from "../../contexts/ThemeProvider";
import heroBg from "../../assets/images/aay1.png";
import { Link } from "react-router-dom";
import Type from "../../components/Type";

const Home = () => {
  const {
    state: { darkMode },
  } = useContext(ThemeContext);

  const bgImage = darkMode ? "gray-200" : "gray-700";
  const textColor = darkMode ? "text-black" : "text-white";
  const bgColor = darkMode ? "bg-white" : "bg-gray-900";

  return (
    <div
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
      }}
      className={`${bgColor} h-screen flex flex-col  justify-center`}
    >
      <main className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
        <div className="w-full sm:w-[39rem] lg:w-auto sm:text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${textColor}`}
          >
            <div className="mb-5">Hi, I am Aayush</div>
            <div className="text-blue-500 font-medium lg:text-5xl sm:text-3xl ">
              <Type />
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className={`mt-3 sm:text-sm  md:text-lg lg:text-lg ${textColor}`}
          >
            I am a Full-Stack Developer.
          </motion.p>
          <div className="flex flex-wrap md:justify-start mt-8">
            {contactLinks.map(({ link, url, name }) => (
              <a
                key={link}
                href={link}
                className="mr-4 mb-4 cursor-pointer hover:scale-110 transition-transform"
              >
                <img alt={name} src={url} className="w-8 h-8 sm:w-10 sm:h-10" />
                <p className="text-xs sm:text-md mt-2 hover:hidden">{name}</p>
              </a>
            ))}
          </div>
          <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
            <Link
              to="resume-section"
              className="w-full sm:w-[20rem] flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-8"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="flex justify-end ">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
            src={heroBg}
            alt="Hero Background"
            className="w-full  lg:w-2/3"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
