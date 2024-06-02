import React from "react";
import ReactDOM from "react-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";
import About from "./componets/About";
import Portfolio from "./componets/Portfolio";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import "./styles/main.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Home />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
