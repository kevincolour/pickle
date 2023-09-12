import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ImageBox } from "./Components/ImageBox";
import { Presentation } from "./Components/Presentation";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Presentation />
      </div>
    </div>
  );
}

export default App;
