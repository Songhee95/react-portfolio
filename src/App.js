import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route
          path="/github"
          component={() => {
            window.location.href = "http://github.com/Songhee95";
            return null;
          }}
        />
        <Route
          path="/linkedin"
          component={() => {
            window.location.href =
              "https://www.linkedin.com/in/songhee-y-821442167/";
            return null;
          }}
        />
      </Router>
    </>
  );
}

export default App;
