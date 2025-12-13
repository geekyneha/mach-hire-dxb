import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("support@heavyrent.com");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.left}>
          <span className={styles.label}>CONTACT US</span>
          <h2>
            Let’s Discuss Your <br /> Equipment Needs
          </h2>

          <button className={styles.cta}>Request a Quote →</button>

          <div className={styles.emailBlock}>
            <span>OR EMAIL US AT</span>
            <div className={styles.email}>
              support@heavyrent.com
              <FiCopy
                className={styles.copy}
                onClick={copyEmail}
                title="Copy email"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className={styles.links}>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Home</li>
              <li>Equipment</li>
              <li>Industries</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>INFORMATION</h4>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Safety Guidelines</li>
              <li>Cookies Settings</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© HeavyRent 2025. All rights reserved.</p>

        <div className={styles.socials}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
