import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./home/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      // BrowserRouter работает на BrowserHistoryAPI, отвечает за навигацию, роуты, всё приложение нужно обернуть в эту компоненту
      // Link component - это по типу тега а, только у него под копотом своя логика для взаимодействия с остальной экосистемой роутинга
      // (NavLink ничем особо не отличается от Link, но принимает в себя доп. параметр связаны со стилем)
      // параметр to отвечает за роут
      // Route component тесно взаимосвязан с Link, и должен иметь одинаковый роут для перехода, иначе не будет работать. 
      // Также имеет параметр component для отрисовки компонента при переходе по ссылке (отрисует ниже diva с ul)
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
