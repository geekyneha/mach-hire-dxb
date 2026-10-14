import styles from "./Hero.module.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/hero.webp";

const Hero = () => {
  const { t } = useTranslation();

  const handleQuoteClick = () => {
    const message = t("hero.quoteMessage");

    window.open(
      `https://wa.me/971509734271?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.verticalCta}>
        <a
          href="mailto:info@machineryrentals.ae"
          className={styles.ctaIcon}
          aria-label={t("hero.emailAria")}
        >
          <FiMail aria-hidden="true" />
          <span className={styles.srOnly}>{t("hero.emailAria")}</span>
        </a>

        <a
          href="tel:+971509734271"
          className={styles.ctaIcon}
          aria-label={t("hero.callAria")}
        >
          <FiPhone aria-hidden="true" />
        </a>

        <a
          href="https://wa.me/971509734271"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaIcon}
          aria-label={t("hero.whatsappAria")}
        >
          <FaWhatsapp aria-hidden="true" />
        </a>
      </div>

      <div className={styles.content}>
        <span className={styles.tag}>{t("hero.tag")}</span>

        <h1 className={styles.heading}>{t("hero.heading")}</h1>

        <p className={styles.description}>{t("hero.description")}</p>

        <button className={styles.cta} onClick={handleQuoteClick}>
          {t("hero.cta")}
        </button>

        <div className={styles.line} />
      </div>

      <div className={styles.imageWrap}>
        <img
          src={heroImage}
          alt={t("hero.imageAlt")}
          className={styles.heroImage}
          width="1600"
          height="900"
          fetchpriority="high"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
