import React, { Component } from "react";

import BG from "./assets/bg.webm";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <video autoPlay muted loop id="myVideo">
          <source src={BG} />
        </video>
        <div className="content">
          <Header />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
