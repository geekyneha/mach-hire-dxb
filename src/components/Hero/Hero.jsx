import styles from "./Hero.module.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Vertical CTA */}
      <div className={styles.verticalCta}>
        <a href="mailto:support@heavyrent.com">
          <FiMail />
        </a>
        <a href="tel:+97100000000">
          <FiPhone />
        </a>
        <a href="https://wa.me/97100000000" target="_blank">
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

        <button className={styles.cta}>Request a Quote</button>

        {/* Decorative line */}
        <div className={styles.line}></div>
      </div>

      {/* Image Area */}
      <div className={styles.imageWrap}>
        <div className={styles.imageShape}>
          {/* image will go via CSS background */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
