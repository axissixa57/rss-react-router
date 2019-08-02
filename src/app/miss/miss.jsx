import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NoMatch from "./no-match";
import { Level } from "../levels/level/level";

export const Miss = ({ match: { url } }) => (
  // Switch, если бы у нас не было бы его, то все компоненты в Routes отрисовывались бы, кот. подходят под паттерн path (вместо одного route отрисуются ещё несколько)
  // например, если не указывать Switch то отрисуется 1 роут и последний
  // а со Switch отрисуется первый совпадающий
  // атрибут exact - необходим чтобы path полностью match-ился(т.е. совпадал точь в точь с url из match), а не только чтобы он проверял, что какая-то его часть подходит 
  // <Route component={NoMatch} /> - обрабатывает ошибки с неправильным роутом
  <div>
    <h1>Handling a Missed Route {url}</h1>
    <p>
      With a pathless route you can handle a missed pattern of its sibling
      Matches. As for example you will be able to show a custom error message
      for the missed location/pathname. Try clicking on the links below to find
      a miss.
    </p>
    <div className="leftNavi">
      <ul>
        <li>
          <Link className="active" to={`${url}/abc/level1`}>
            Level 1
          </Link>
        </li>
        <li>
          <Link className="active" to={`${url}/level2`}>
            Level 2
          </Link>
        </li>
        <li>
          <Link className="active" to={`${url}/abc/level3`}>
            Level 3
          </Link>
        </li>
      </ul>
    </div>
    <div className="rightContent">
      <p>Second Level Content will appear here:</p>
      <Switch>
        <Route path={`${url}/abc/:level`} component={Level} />
        <Route path={`${url}`} exact render={() => null} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
);
