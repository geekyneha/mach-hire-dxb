import styles from "./Footer.module.css";
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleQuoteClick = () => {
    const message = t("footer.quoteMessage");

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
        <div className={styles.left}>
          <span className={styles.label}>{t("footer.contactUs")}</span>

          <h2 className={styles.heading}>
            {t("footer.headingLine1")} <br /> {t("footer.headingLine2")}
          </h2>

          <button className={styles.cta} onClick={handleQuoteClick}>
            {t("footer.cta")}
          </button>

          <div className={styles.emailBlock}>
            <span className={styles.emailLabel}>{t("footer.emailLabel")}</span>

            <div className={styles.email}>
              <span className={styles.emailText}>info@machineryrentals.ae</span>

              <FiCopy
                className={styles.copy}
                onClick={copyEmail}
                title={t("footer.copyEmail")}
                aria-label={t("footer.copyEmail")}
                role="button"
                tabIndex={0}
              />
            </div>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkTitle}>{t("footer.quickLinks")}</h3>

            <ul className={styles.linkList}>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/")}
                role="link"
                tabIndex={0}
              >
                {t("footer.home")}
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/about")}
                role="link"
                tabIndex={0}
              >
                {t("footer.aboutUs")}
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/booking")}
                role="link"
                tabIndex={0}
              >
                {t("footer.booking")}
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/services")}
                role="link"
                tabIndex={0}
              >
                {t("footer.services")}
              </li>
              <li
                className={styles.linkItem}
                onClick={() => navigate("/careers")}
                role="link"
                tabIndex={0}
              >
                {t("footer.careers")}
              </li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3 className={styles.linkTitle}>{t("footer.information")}</h3>

            <ul className={styles.linkList}>
              <li className={styles.linkItem}>{t("footer.terms")}</li>
              <li className={styles.linkItem}>{t("footer.privacy")}</li>
              <li className={styles.linkItem}>{t("footer.safety")}</li>
              <li className={styles.linkItem}>{t("footer.cookie")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>{t("footer.copyright")}</p>

        <div className={styles.socials}>
          <a
            href="https://www.youtube.com/@uaemachineryrentals"
            aria-label={t("footer.youtube") || "YouTube"}
            className={styles.socialIcon}
          >
            <FaYoutube className={styles.youtube} />
          </a>

          <a
            href="https://www.tiktok.com/@uaemachineryrentals"
            aria-label={t("footer.tiktok") || "TikTok"}
            className={styles.socialIcon}
          >
            <FaTiktok className={styles.tiktok} />
          </a>

          <a
            href="https://www.instagram.com/uaemachineryrentals"
            aria-label={t("footer.instagram") || "Instagram"}
            className={styles.socialIcon}
          >
            <FaInstagram className={styles.instagram} />
          </a>

          <a
            href="https://www.facebook.com/uaemachineryrentals"
            aria-label={t("footer.facebook") || "Facebook"}
            className={styles.socialIcon}
          >
            <FaFacebook className={styles.facebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
