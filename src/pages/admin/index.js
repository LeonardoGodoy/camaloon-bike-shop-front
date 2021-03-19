import React from "react";
import { Switch, Route } from "react-router-dom";

import ProductsIndex from "./products";
import ProductsNew from "./products/new";
import ProductsEdit from "./products/edit";

import CategoriesIndex from "./categories";
import CategoriesNew from "./categories/new";

import AdminMenu from "../../components/AdminMenu";

function AdminIndex(props) {
  return (
    <div>
      <AdminMenu />

      <Switch>
        <Route path="/admin/products/new" component={ProductsNew} />
        <Route
          path="/admin/products/:productId/edit"
          component={ProductsEdit}
        />
        <Route path="/admin/products" component={ProductsIndex} />
        <Route path="/admin/categories/new" component={CategoriesNew} />
        <Route path="/admin/categories" component={CategoriesIndex} />
        <Route path="/admin" component={ProductsIndex} />
      </Switch>
    </div>
  );
}

export default AdminIndex;
