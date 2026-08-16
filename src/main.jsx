import App from "./components/App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/Fonts.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
);
