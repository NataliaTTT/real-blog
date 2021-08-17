import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Masthead from "./Masthead";
import MainContentHome from "./MainContentHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Masthead
        h1={`Clean Blog`}
        backgroundImage={{ backgroundImage: `url('assets/img/home-bg.jpg')` }}
        span={`A Blog Theme by Start Bootstrap`}
      />
      <MainContentHome />
    </div>
  );
}

export default Home;
