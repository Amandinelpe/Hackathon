import React from "react";
import Home from "./Pages/Home";
import Voyage1 from "./Pages/Voyage1";
import Voyage2 from "./Pages/Voyage2";
import Voyage3 from "./Pages/Voyage3";
import Transport from "./Transport/Transport";
import Voyage4 from "./Pages/Voyage4";
import "./Styles/Settings.css";

const App = () => {
  return (
    <>
      <Home />
      <Voyage1 />
      <Voyage2 />
      <Voyage3 />
      <Voyage4 />
      <Transport />
    </>
  );
};

export default App;
