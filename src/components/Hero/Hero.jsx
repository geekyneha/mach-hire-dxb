import styles from "./Hero.module.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const handleQuoteClick = () => {
    const message = `
UAE Machinery Rentals Inquiry

Hello,
I’m interested in renting heavy machinery.

Please share available equipment, rental rates, and terms.

Thank you.
`;

    window.open(
      `https://wa.me/971509734271?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className={styles.hero}>
      {/* CTA */}
      <div className={styles.verticalCta}>
        <a className={styles.ctaIcon} href="mailto:support@heavyrent.com">
          <FiMail />
        </a>
        <a className={styles.ctaIcon} href="tel:+971509734271">
          <FiPhone />
        </a>
        <a
          className={styles.ctaIcon}
          href="https://wa.me/971509734271"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.tag}>UAE MACHINERY RENTALS</span>

        <h1 className={styles.heading}>
          Reliable Heavy Machinery <br /> For Every Job Site
        </h1>

        <p className={styles.description}>
          From excavators to loaders, we provide well-maintained equipment to
          keep your projects moving on time.
        </p>

        <button className={styles.cta} onClick={handleQuoteClick}>
          Request a Quote
        </button>

        <div className={styles.line} />
      </div>

      {/* Image */}
      <div className={styles.imageWrap}>
        <div className={styles.imageShape} />
      </div>
    </section>
  );
};

export default Hero;
