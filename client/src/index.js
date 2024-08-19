import React from "react";
import ReactDOM from "react-dom/client";
import Singin from "./pages/signin/signin";
import GlobalStyled from "./styles/globalstyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Singin />
  </React.StrictMode>
);
