import { Link } from "react-router-dom";
import NavList from "../NavList/NavList";
import SocialIcons from "../NavList/SocialIcons";
import css from "./Header.module.css"; /*
import unicorn from "../../asset/unicorn.svg";*/

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <div className={css.planetIcon}>
          <div className={css.ring}></div>
          <div className={css.planet}></div>
        </div>
      </Link>
      <NavList />
      <SocialIcons />
    </header>
  );
};

export default Header;
