import Home from "./ui/pages/Home";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Route } from "./ui/molecules/Route";
import About from "./ui/pages/About";
import Contact from "./ui/pages/Contact";
import Projects from "./ui/pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider>
      <>
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  );
}

export default App;
