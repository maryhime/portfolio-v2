import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< Updated upstream
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
=======
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
