import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Masthead from "./Masthead";
import MainContentPost from "./MainContentPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Post() {
  return (
    <div className="Contact">
      <Masthead
        h1={`Man must explore, and this is exploration at its greatest`}
        h2={`Problems look mighty small from 150 miles up`}
        backgroundImage={{
          backgroundImage: `url('assets/img/post-bg.jpg')`,
        }}
        spanMeta={`Posted by
          Start Bootstrap 
        on August 24, 2021`}
      />
      <MainContentPost />
    </div>
  );
}

export default Post;
