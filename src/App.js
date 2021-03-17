import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminIndex from "./pages/admin";
import CustomerIndex from "./pages/customer";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminIndex} />
        <Route path="/" component={CustomerIndex} />
      </Switch>
    </Router>
  );
}
