import React from "react";
import SocialIconBox from "./SocialIconBox";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <SocialIconBox />

        <div className="footer__message">
          <p>Retro Style Portfolio - Built with React</p>
          <p>by</p>
          <p>
            <a href="https://github.com/abid-shahriar">Abid Shahriar</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
