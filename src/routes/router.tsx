import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Movies from "../pages/Movies";
import Bookmarks from "../pages/Bookmarks";
import TvSeries from "../pages/TvSeries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movies />,
    errorElement: <Error />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
    errorElement: <Error />,
  },
]);
