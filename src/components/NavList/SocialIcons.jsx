import css from "./NavList.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className={css.socialIcons}>
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noreferrer"
        className={css.socialIcon}
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noreferrer"
        className={css.socialIcon}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://instagram.com/your-profile"
        target="_blank"
        rel="noreferrer"
        className={css.socialIcon}
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialIcons;
