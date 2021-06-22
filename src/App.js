import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

function HowItWorks() {
  return (
    <div>
      <h2>How-It-Works</h2>
    </div>
  );
}

export default App;
