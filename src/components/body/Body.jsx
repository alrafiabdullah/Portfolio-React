import React from "react";

import About from "./about/About";
import Projects from "./projects/Projects";
import ContactForm from "./contactForm/ContactForm";

import "./body.scss";

function Body() {
  return (
    <div className="main-body">
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default Body;
