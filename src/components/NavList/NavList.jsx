import { Link } from "react-router-dom";
import css from "./NavList.module.css";

const NavList = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <Link className={css.link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={css.link} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={css.link} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
