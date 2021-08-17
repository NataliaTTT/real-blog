import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Navigation from "./Components/Navigation";

import Home from "./Components/Home";
import About from "./Components/About";
import Post from "./Components/Post";
import Contact from "./Components/Contact";

import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/post" component={Post} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
