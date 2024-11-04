import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MenuProvider } from "./Contexts/MenuContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>
);
