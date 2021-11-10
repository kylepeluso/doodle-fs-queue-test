import React from "react";

import "./app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/home";
import MTG from "./views/MTG";
import Contact from "./views/contact";

const App = () => {
  return (
    <div className="app">
      <Router>
        <main>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/MTG">MTG</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <Route path="/MTG" component={MTG} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
        </main>
      </Router>
    </div>
  );
};

export default App;
