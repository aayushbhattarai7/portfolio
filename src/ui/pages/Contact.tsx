import { useContext } from "react";
import { contactLinks } from "../../constant/constants";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="contact"
      className={`py-12 mt-6 md:py-24 h-screen ${
        darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-gray-200"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Contact
        </h2>
        <div className="text-center mb-12">
          <h4 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-2">
            Connect with me
          </h4>
          <p className="text-lg md:text-xl">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex flex-col md:flex-col justify-between items-start md:items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-4">
            <form className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-gray-500" : "text-gray-800"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-3 border rounded-lg ${
                    darkMode
                      ? "bg-gray-100 border-gray-300 outline-none text-black"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-gray-500" : "text-gray-800"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-3 border outline-none rounded-lg ${
                    darkMode
                      ? "bg-gray-100 border-gray-300 text-black"
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-gray-500" : "text-gray-800"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className={`w-full p-3 border outline-none rounded-lg ${
                    darkMode
                      ? "bg-gray-100 border-gray-300 text-black "
                      : "bg-gray-100 border-gray-300 text-gray-900"
                  }`}
                  rows={5}
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="mailto:aayush.bhattarai.np@gmail.com"
                  className="text-blue-500 underline"
                >
                  Send me an email directly
                </a>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer
        className={`${
          darkMode ? "bg-white text-gray-900" : "bg-gray-700 text-gray-200"
        }mt-12 md:mt-0 gap-20 flex flex-col md:flex-row justify-center items-center p-6 md:px-8`}
      >
        <div
          className={`flex flex-col items-center lg:gap-40 text-center md:flex-row md:text-left md:items-start `}
        >
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-2">Email</h3>
            <a
              href="mailto:aayush.bhattarai.np@gmail.com"
              className="text-blue-500 hover:underline"
            >
              aayush.bhattarai.np@gmail.com
            </a>
          </div>
          <div className="mb-6 md:mb-0 md:mr-8 flex items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                {" "}
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-blue-500 text-2xl mr-2"
                />
                Address
              </h3>
              <p className="ml-5">Itahari, Nepal</p>
            </div>
          </div>
          <div className="flex justify-center flex-col md:justify-start">
            <h3 className="text-2xl font-bold mb-4 md:mb-0 lg:ml-20 ml-5">
              Social
            </h3>
            <ul className="flex ml-4">
              {contactLinks.map((el) => (
                <li key={el.name} className="mx-2">
                  <a
                    href={el.link}
                    className="flex items-center justify-center p-2 rounded-full transition-transform transform hover:scale-110"
                    style={{
                      backgroundColor: darkMode ? "#1a202c" : "#edf2f7",
                      color: darkMode ? "#fff" : "#000",
                    }}
                  >
                    <img alt={el.name} src={el.url} className="w-8 h-8" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
