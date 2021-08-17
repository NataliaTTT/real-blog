import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Masthead from "./Masthead";
import MainContentContact from "./MainContentContact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Contact() {
  return (
    <div className="Contact">
      <Masthead
        h1={`Contact Me`}
        backgroundImage={{
          backgroundImage: `url('assets/img/contact-bg.jpg')`,
        }}
        span={`Have questions? I have answers.`}
      />
      <MainContentContact />
    </div>
  );
}

export default Contact;
