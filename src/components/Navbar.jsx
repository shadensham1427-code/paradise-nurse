import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const totalQuantity = useSelector(
    (state) => state.cart.totalQuantity
  );

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Paradise Nursery</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/plants">
            Plants
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            Cart ({totalQuantity})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;