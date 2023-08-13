import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { InfoContextProvider } from "./context/InfoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <InfoContextProvider>
      <App />
      <ToastContainer
        pauseOnHover={true}
        autoClose={3000}
        position="bottom-right"
      />
    </InfoContextProvider>
  </BrowserRouter>
);
