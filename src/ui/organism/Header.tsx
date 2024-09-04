import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav
        className={
          darkMode
            ? "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
            : "bg-gray-700 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
        }
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                darkMode
                  ? "text-xl font-medium text-decoration-none whitespace-nowrap text-black"
                  : "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
              }
            >
              {`<Aayush/>`}
            </a>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              <li className="cursor-pointer">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-500 block py-2 px-3 rounded-md"
                      : darkMode
                      ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                      : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-500 block py-2 px-3 rounded-md"
                      : darkMode
                      ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                      : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-500 block py-2 px-3 rounded-md"
                      : darkMode
                      ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                      : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-500 block py-2 px-3 rounded-md"
                      : darkMode
                      ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                      : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt="Light Mode"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt="Dark Mode"
                />
              )}
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                  alt="Light Mode"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  alt="Dark Mode"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                />
              )}
            </div>

            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0, transition: { type: "spring" } }}
              exit={{ x: 200, transition: { type: "spring" } }}
              className={
                darkMode
                  ? "bg-white py-2 px-2 z-50 fixed top-16 right-2 rounded-lg shadow-lg w-64"
                  : "bg-black py-2 px-2 z-50 fixed top-16 right-2 rounded-lg shadow-lg w-64"
              }
            >
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-4 rounded-md text-white bg-blue-500"
                        : darkMode
                        ? "block py-2 px-4 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-4 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                    onClick={() => setToggle(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-4 rounded-md text-white bg-blue-500"
                        : darkMode
                        ? "block py-2 px-4 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-4 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                    onClick={() => setToggle(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-4 rounded-md text-white bg-blue-500"
                        : darkMode
                        ? "block py-2 px-4 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-4 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                    onClick={() => setToggle(false)}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-4 rounded-md text-white bg-blue-500"
                        : darkMode
                        ? "block py-2 px-4 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-4 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                    onClick={() => setToggle(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
