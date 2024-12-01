import { HashLink } from "react-router-hash-link";
import css from "./NavList.module.css";

const NavList = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <HashLink className={css.link} to="/#about">
            About
          </HashLink>
        </li>
        <li>
          <HashLink className={css.link} to="/#projects">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink className={css.link} to="/#contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
