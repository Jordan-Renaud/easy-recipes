import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Recipe from "./Recipe";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="main">
      <Router>
        <ScrollToTop />
        <div className="App">
          <header>
            <Link className="link" id="home" to="/"></Link>
            <Link className="link" id="help" to="/how-it-works"></Link>
          </header>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
        </Switch>

        <footer>
          <a
            href="https://jordan-renaud.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            made by Jordan Renaud
          </a>
        </footer>
      </Router>
    </div>
  );
}

export default App;
