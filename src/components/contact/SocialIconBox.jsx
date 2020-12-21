import React from "react";
import fb from "../../asset/svgs/facebook.svg";
import insta from "../../asset/svgs/instagram.svg";
import linkedin from "../../asset/svgs/linkedin.svg";
import email from "../../asset/svgs/email-4.svg";

const SocialIconBox = () => {
  return (
    <div className="footer__social-icons">
      <div className="icon-box fb">
        <a
          href="https://facebook.com/abid.sh.akash"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fb} alt="abid shahriar facebook" />
        </a>
      </div>
      <div className="icon-box insta">
        <a
          href="https://instagram.com/find.abid"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="abid shahriar instagram" />
        </a>
      </div>
      <div className="icon-box linkedin">
        <a
          href="https://linkedin.com/abid.sh.akash"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="abid shahriar linkedin" />
        </a>
      </div>
      <div className="icon-box email">
        <a href="mailto: abidshahriar7@gmail.com">
          <img src={email} alt="abid shahriar gmail" />
        </a>
      </div>
    </div>
  );
};

export default SocialIconBox;
