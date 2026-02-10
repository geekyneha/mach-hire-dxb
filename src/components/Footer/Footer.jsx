import styles from "./Footer.module.css";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
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
      "_blank",
    );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("info@machineryrentals.ae");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.label}>CONTACT US</span>

          {/* h2 is correct here */}
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
                aria-label="Copy email address"
                role="button"
                tabIndex={0}
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            {/* FIXED: h4 → h3 */}
            <h3 className={styles.linkTitle}>Quick Links</h3>

            <ul className={styles.linkList}>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/")}
                role="link"
                tabIndex={0}
              >
                Home
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/about")}
                role="link"
                tabIndex={0}
              >
                About Us
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/booking")}
                role="link"
                tabIndex={0}
              >
                Booking
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/services")}
                role="link"
                tabIndex={0}
              >
                Services
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/careers")}
                role="link"
                tabIndex={0}
              >
                Careers
              </li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            {/* FIXED: h4 → h3 */}
            <h3 className={styles.linkTitle}>Information</h3>

            <ul className={styles.linkList}>
              <li className={styles.linkItem}>Terms of Service</li>
              <li className={styles.linkItem}>Privacy Policy</li>
              <li className={styles.linkItem}>Safety Guidelines</li>
              <li className={styles.linkItem}>Cookie Settings</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © UAE Machinery Rentals 2025. All rights reserved.
        </p>

        <div className={styles.socials}>
          <a href="#" aria-label="YouTube" className={styles.socialIcon}>
            <FaYoutube className={styles.youtube} />
          </a>

          <a href="#" aria-label="TikTok" className={styles.socialIcon}>
            <FaTiktok className={styles.tiktok} />
          </a>

          <a href="#" aria-label="Instagram" className={styles.socialIcon}>
            <FaInstagram className={styles.instagram} />
          </a>

          <a href="#" aria-label="Facebook" className={styles.socialIcon}>
            <FaFacebook className={styles.facebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
