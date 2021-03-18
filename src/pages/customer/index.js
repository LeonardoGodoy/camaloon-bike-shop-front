import React from "react";
import { Switch, Route } from "react-router-dom";

import OrderIndex from "./orders";
import OrderShow from "./orders/show";
// import OrderCreated from "./orders/success";
import ProductsIndex from "./products";
import ProductsShow from "./products/show";

import Menu from "../../components/Menu";

export default function App() {
  return (
    <div>
      <Menu />

      <Switch>
        <Route exact path="/products/:productId" component={ProductsShow} />
        <Route exact path="/products" component={ProductsIndex} />
        <Route exact path="/orders/:orderId" component={OrderShow} />
        <Route exact path="/orders" component={OrderIndex} />
        <Route path="/" component={ProductsIndex} />
      </Switch>
    </div>
  );
}
