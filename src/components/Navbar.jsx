import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <CustomLink to="/" className="site-title">
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/About" className="nav_link">
            About
          </CustomLink>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
