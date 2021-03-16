import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        <nav>
          <ul>

            <li>
              <Link to="/admin/products">Products</Link>
            </li>
            <li>
              <Link to="/admin/categories">Categories</Link>
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
