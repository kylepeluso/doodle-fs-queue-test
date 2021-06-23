import React from 'react'

import './app.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/home";
import Reuters from "./views/reuters";
const App = () => {

  return (

    <div className='app'>
        <Router>
        <main>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/reuters">Reuters</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/reuters" component={Reuters} />
        </main>

        </Router>

    </div>
  )
}

export default App
