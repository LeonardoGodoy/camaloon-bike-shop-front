import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AdminIndex from './pages/admin'
import CustomerIndex from './pages/customer'

export default function App() {
  return (
    <Router>
      <div>
        <nav class="menu__nav">
          <ul class="menu__list">
            <li class="menu__item">
              <Link class="menu__link menu__link--hover"  to="/">Customer</Link>
            </li>

            <li class="menu__item">
              <Link class="menu__link menu__link--hover" to="/admin/">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path='/admin' component={AdminIndex} />
        <Route path='/' component={CustomerIndex} />
      </Switch>
    </Router>
  );
}
