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
        <nav>
          <ul>
            <li>
              <Link to="/">Customer</Link>
            </li>
            <li>
              <Link to="/admin/">Admin</Link>
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
