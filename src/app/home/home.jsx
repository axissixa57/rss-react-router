import React from "react";
import logo from '../../assets/images/logo.svg';

const Home = props => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Welcome to React</h1>
      </header>
      <p className="app-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default Home;
