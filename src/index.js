import React from "react";
import ReactDOM from "react-dom/client";
import Singup from "./pages/signup/signup";
import GlobalStyled from "./styles/globalstyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Singup />
  </React.StrictMode>
);
