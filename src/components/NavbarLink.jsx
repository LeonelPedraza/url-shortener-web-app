import { Link } from "react-router-dom";

const NavbarLink = ({ to, name, children }) => {
  return (
    <li className="page-navbar-item">
      <Link to={to} className="page-navbar-link">
        {children}
        {name}
      </Link>
    </li>
  );
};

export default NavbarLink;
