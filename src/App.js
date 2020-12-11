import React, { Component } from "react";

import "./App.css";
import BG from "./assets/bg.webm";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <video autoPlay muted loop id="myVideo">
          <source src={BG} />
        </video>
        <div className="content">
          <h1>Coming Soon!</h1>
        </div>
      </div>
    );
  }
}

export default App;
