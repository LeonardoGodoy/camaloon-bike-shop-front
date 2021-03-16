import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ProductsIndex from './products'
import ProductsShow from './products/show'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/products/:productId' component={ProductsShow} />
        <Route path='/products' component={ProductsIndex} />
        <Route path="/" component={ProductsIndex} />
      </Switch>
    </Router>
  );
}
