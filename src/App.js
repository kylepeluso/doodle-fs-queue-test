import React from "react";

import "./app.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./views/home";
import MTG from "./views/MTG";
import Contact from "./views/contact";
import Article1 from "./views/article1";
import Article2 from "./views/article2";

const App = () => {
  return (
    <div className="app">
      <Router>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/MTG">MTG</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/article1">Article 1</Link>
              </li>
              <li>
                <Link to="/article2">Article 2</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/MTG">
              <MTG />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/article1">
              <Article1 />
            </Route>
            <Route path="/article2">
              <Article2 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
