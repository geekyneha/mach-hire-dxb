import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const handleQuoteClick = () => {
    const message = `
    
 Heavy Equipment Rental (UAE)

Hello,
I’m interested in renting heavy machinery.
I would like to request a quotation for heavy machinery rental in the UAE.

Please provide the available equipment options along with rental rates and terms.


Thank you.`;

    const phoneNumber = "971509734271"; // your WhatsApp number

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
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

          <button className={styles.cta} onClick={handleQuoteClick}>
            Request a Quote →
          </button>

          <div className={styles.emailBlock}>
            <span>OR EMAIL US AT</span>
            <div className={styles.email}>
              support@heavyrental.com
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
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/equipments")}>Equipment</li>
              <li onClick={() => navigate("/about")}>About</li>
              <li onClick={() => navigate("/services")}>Services</li>
              <li onClick={() => navigate("/contact")}>Contact</li>
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
