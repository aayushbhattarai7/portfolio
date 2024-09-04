import Home from "./ui/pages/Home";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Route } from "./ui/molecules/Route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "",
        element: <Home />,
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
