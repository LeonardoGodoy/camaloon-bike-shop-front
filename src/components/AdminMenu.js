import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";

function AdminMenu() {
  return (
    <div>
      <nav className="menu__nav">
        <ul className="menu__list">
          <div className="menu__logo">
            <Logo />
          </div>

          <li className="menu__item">
            <NavLink
              className="menu__link menu__link--hover"
              to="/admin/products"
            >
              Products
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className="menu__link menu__link--hover"
              to="/admin/categories"
            >
              Categories
            </NavLink>
          </li>

          <li className="menu__item menu__item--right">
            <Link className="menu__link menu__link--hover" to="/">
              Access as Customer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminMenu;
