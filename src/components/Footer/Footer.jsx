import NavList from "../NavList/NavList";
import SocialIcons from "../NavList/SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerContentTop">
          <h4>Social Media</h4>
          <NavList />
          <SocialIcons />
        </div>
        <div className="footerContentBottom">
          <p>Created by Kateryna Folova</p>
          <p>&copy; 2023 Kateryna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
