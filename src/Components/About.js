import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Masthead from "./Masthead";
import MainContentAbout from "./MainContentAbout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function About() {
  return (
    <div className="About">
      <Masthead
        h1={`About Me`}
        backgroundImage={{ backgroundImage: `url('assets/img/about-bg.jpg')` }}
        span={`This is what I do.`}
      />
      <MainContentAbout />
    </div>
  );
}

export default About;
