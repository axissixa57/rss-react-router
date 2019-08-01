import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./home/home";
import Levels from "./levels/levels";
import "./App.css";

class App extends Component {
  render() {
    // NavLink - тот же что и Link, но имеет атрибут activeClassName, используется в основном чтобы подсвечать активные пункты меню
    // если мы в Route передаём component, то он пробросывает автоматом такие propsы как history, location, match
    // match - хранит в себе параметры, кот. помогают роутеру собственно ориентироваться между нашими роутерами и решать какая компонента должна отрисроваться
    // location - содержит параметры, кот. показывают где мы сейчас находимся
    // history - это аналог из historyAPi, она содержит методы по перемещению по странице (go,back,replace,location и т.д.)
    // location из history это мьютабельный объект, т.е. если в какой-то компоненте сделать проверку, что location не изменился и возьмём данные из history - location, То
    // страница может работать некорректно, потому что данные могут кое-где изменится, поэтому надо пользователь из location
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/basic-routing" activeClassName="active">
                BasicRouting
              </NavLink>
            </li>
          </ul>

          <Route path="/" component={Home} />
          <Route path="/basic-routing" component={Levels} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
