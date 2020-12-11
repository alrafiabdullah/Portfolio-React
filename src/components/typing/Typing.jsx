import React, { Component } from "react";
import Typed from "typed.js";

import "./typing.scss";

class Typing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typed: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    let typed = new Typed(".delay", {
      strings: [
        "I am a backend developer.",
        "I am a frontend learner.",
        "I am a DVa main 😎",
        "I love cycling and playing video games 🚲🎮",
      ],
      startDelay: 500,
      backDelay: 1000,
      typeSpeed: 100,
      showCursor: false,
      smartBackspace: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="typing">
          <h3>Hi, I am Abdullah 👻</h3>
          <div className="delay">{this.typed}</div>
          <h3>Welcome to my Portfolio!</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default Typing;
