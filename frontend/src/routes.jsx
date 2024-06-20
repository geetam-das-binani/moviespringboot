import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from './components/Home';
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element:<Home />,
        errorElement: <h1>Error</h1>,
      },
      {
        path: "/trailer/:ytTrailerId",
        element:<Trailer />,
        errorElement: <h1>Error</h1>,
      },
      {
        path: "/reviews/:imdbId",
        element:<Reviews />,
        errorElement: <h1>Error</h1>,
      },
    ],

  },

  {
    path: "*",
    element: <h1>Not Found</h1>,
  }
]);
