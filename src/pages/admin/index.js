import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


import ProductsIndex from './products'
import ProductsShow from './products/show'
import ProductsNew from './products/new'

import CategoriesIndex from './categories'
import CategoriesShow from './categories/show'
import CategoriesNew from './categories/new'

export default function App(props) {
  return (
    <Router>
      <div>
        <nav class="menu__nav">
          <ul class="menu__list">
            <li class="menu__item">
              <NavLink className="menu__link menu__link--hover" to="/admin/products">Products</NavLink>
            </li>
            <li class="menu__item">
              <NavLink className="menu__link menu__link--hover" to="/admin/categories">Categories</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/admin/products/new' component={ProductsNew} />
          <Route path='/admin/products/:productId' component={ProductsShow} />
          <Route path='/admin/products' component={ProductsIndex} />
          <Route path='/admin/categories/new' component={CategoriesNew} />
          <Route path='/admin/categories/:categoryId' component={CategoriesShow} />
          <Route path='/admin/categories' component={CategoriesIndex} />

          {/* <Route path="/" component={ProductsIndex} /> */}
        </Switch>
      </div>
    </Router>
  );
}
