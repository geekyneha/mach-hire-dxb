import styles from "./Hero.module.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
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

  return (
    <section className={styles.hero}>
      {/* Vertical CTA */}
      <div className={styles.verticalCta}>
        <a href="mailto:support@heavyrent.com">
          <FiMail />
        </a>
        <a href="tel:+971509734271">
          <FiPhone />
        </a>
        <a href="https://wa.me/971509734271" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.tag}>EQUIPMENT RENTAL</span>

        <h1>
          Reliable Heavy Machinery <br />
          For Every Job Site
        </h1>

        <p>
          From excavators to loaders, we provide well-maintained equipment to
          keep your projects moving on time.
        </p>

        <button className={styles.cta} onClick={handleQuoteClick}>
          Request a Quote
        </button>

        {/* Decorative line */}
        <div className={styles.line}></div>
      </div>

      {/* Image Area */}
      <div className={styles.imageWrap}>
        <div className={styles.imageShape} />
      </div>
    </section>
  );
};

export default Hero;
