import React, { Component } from "react";

import BG from "./assets/bg.webm";
import Typing from "./components/typing/Typing";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Top from "./components/toTop/Top";
import Footer from "./components/footer/Footer";

import "./App.scss";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <video autoPlay muted loop id="myVideo">
          <source src={BG} />
        </video>
        <div className="content">
          <Typing />
          <Header />
          <Body />
          <Top />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
