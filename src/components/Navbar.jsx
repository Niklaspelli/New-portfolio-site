import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Home
      </Link>

      <ul>
        <CustomLink to="/About" className="nav_link">
          About
        </CustomLink>
        <CustomLink to="/Work">Work</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>

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
