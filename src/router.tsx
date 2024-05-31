// Modules
// Navigate from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/about",
        element: <PageAbout />,
      },
      {
        path: "*",
        // Redirect to Home
        //element: <Navigate to="/" replace />,
        element: <Page404 />,
      },
    ],
  },
]);

export default router;
