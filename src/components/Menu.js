import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo } from '../assets/logo.svg';


function Menu() {
  return (
    <div>
      <nav className="menu__nav">
        <ul className="menu__list">
          <div className="menu__logo">
            <Logo />
          </div>

          <li className="menu__item">
            <NavLink className="menu__link menu__link--hover" to="/">Products</NavLink>
          </li>

          <li className="menu__item">
            <Link className="menu__link menu__link--hover" to="/orders">Orders</Link>
          </li>

          <li className="menu__item menu__item--right">
            <Link className="menu__link menu__link--hover" to="/admin/products">Access as an <strong>Admin</strong></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu
