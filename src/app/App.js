import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./home/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/home">
                Home
              </Link>
            </li>
          </ul>

          <Route path="/home" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
