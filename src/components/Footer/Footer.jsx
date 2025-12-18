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
UAE Machinery Rentals Inquiry

Hello,
I would like to request a quotation for heavy machinery rental in the UAE.

Please provide the available equipment options along with rental rates and terms.

Thank you.
`;

    window.open(
      `https://wa.me/971509734271?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("support@heavyrental.com");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.left}>
          <span className={styles.label}>CONTACT US</span>

          <h2 className={styles.heading}>
            Let’s Discuss Your <br /> Equipment Needs
          </h2>

          <button className={styles.cta} onClick={handleQuoteClick}>
            Request a Quote →
          </button>

          <div className={styles.emailBlock}>
            <span className={styles.emailLabel}>OR EMAIL US AT</span>

            <div className={styles.email}>
              <span className={styles.emailText}>info@machineryrentals.ae</span>

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
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>QUICK LINKS</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem} onClick={() => navigate("/")}>
                Home
              </li>

              <li
                className={styles.linkItem}
                onClick={() => navigate("/about")}
              >
                About Us
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/booking")}
              >
                Booking
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/services")}
              >
                Services
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/careers")}
              >
                Careers
              </li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>INFORMATION</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>Terms of Service</li>
              <li className={styles.linkItem}>Privacy Policy</li>
              <li className={styles.linkItem}>Safety Guidelines</li>
              <li className={styles.linkItem}>Cookies Settings</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © UAE Machinery Rentals 2025. All rights reserved.
        </p>

        <div className={styles.socials}>
          <FaFacebookF className={styles.socialIcon} />
          <FaTwitter className={styles.socialIcon} />
          <FaInstagram className={styles.socialIcon} />
          <FaLinkedinIn className={styles.socialIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
