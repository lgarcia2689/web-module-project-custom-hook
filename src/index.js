import React from "react";
import ReactDOM from "react-dom";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useDarkMode from './hooks/useDarkMode'
import "./styles.scss";

const App = () => {

  const [ coinData, darkMode, setDarkMode ] = useDarkMode();
 
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
      <useDarkMode/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
