import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo } from '../assets/logo.svg';

function AdminMenu() {
  return (
    <div>
      <nav class="menu__nav">
        <ul class="menu__list">
          <div class="menu__logo">
            <Logo />
          </div>

          <li class="menu__item">
            <NavLink className="menu__link menu__link--hover" to="/admin/products">Products</NavLink>
          </li>
          <li class="menu__item">
            <NavLink className="menu__link menu__link--hover" to="/admin/categories">Categories</NavLink>
          </li>

          <li class="menu__item menu__item--right">
            <Link class="menu__link menu__link--hover" to="/">Access as Customer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminMenu
