import SocialIcons from "../NavList/SocialIcons";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.footerContentTop}>
          <h4 className={css.title}>Social Media</h4>
          <SocialIcons />
        </div>
        <div className={css.footerContentBottom}>
          <p className={css.copyright}>Created by Kateryna Folova</p>
          <p className={css.copyright}>
            &copy; 2023 Kateryna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
