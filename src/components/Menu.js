import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo } from '../assets/logo.svg';


function Menu() {
  return (
    <div>
      <nav class="menu__nav">
        <ul class="menu__list">
          <div class="menu__logo">
            <Logo />
          </div>

          <li class="menu__item">
            <NavLink className="menu__link menu__link--hover" to="/">Products</NavLink>
          </li>

          <li class="menu__item">
            <Link class="menu__link menu__link--hover" to="/orders">Orders</Link>
          </li>

          <li class="menu__item menu__item--right">
            <Link class="menu__link menu__link--hover" to="/admin/products">Access as an <strong>Admin</strong></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu
