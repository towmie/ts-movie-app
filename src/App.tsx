import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./globalStyles/GlobalStyles.css";
import { MovieProvider } from "./context/MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}
