import React from "react";
import ReactDOM from "react-dom/client";
import Singup from "./pages/signup/signup";
import { GlobalStyle } from "./styles/mainStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Singup />
  </React.StrictMode>
);
