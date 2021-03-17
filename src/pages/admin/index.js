import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import ProductsIndex from "./products";
import ProductsShow from "./products/show";
import ProductsNew from "./products/new";

import CategoriesIndex from "./categories";
import CategoriesShow from "./categories/show";
import CategoriesNew from "./categories/new";

import AdminMenu from "../../components/AdminMenu";

export default function App(props) {
  return (
    <div>
      <AdminMenu />

      <Switch>
        <Route path="/admin/products/new" component={ProductsNew} />
        <Route path="/admin/products/:productId" component={ProductsShow} />
        <Route path="/admin/products" component={ProductsIndex} />
        <Route path="/admin/categories/new" component={CategoriesNew} />
        <Route
          path="/admin/categories/:categoryId"
          component={CategoriesShow}
        />
        <Route path="/admin/categories" component={CategoriesIndex} />
        <Route path="/admin" component={ProductsIndex} />
      </Switch>
    </div>
  );
}
