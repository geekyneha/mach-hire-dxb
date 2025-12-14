import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageWrap}>
          <div className={styles.image}></div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <span className={styles.label}>ABOUT US</span>
          <h2>
            Building Trust Through <br />
            Reliable Equipment Rental
          </h2>

          <p>
            We are a heavy machinery rental company committed to supporting
            construction, infrastructure, and industrial projects with
            dependable equipment and professional service.
          </p>

          <p>
            Our focus is on quality, safety, and long-term partnerships —
            ensuring every machine delivered is ready to perform on site.
          </p>

          <button className={styles.cta}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
