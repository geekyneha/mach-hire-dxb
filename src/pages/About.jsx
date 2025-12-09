import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      {/* Hero / Heading Section */}
      <section className={styles.heroSection}>
        <h1>About Our Company</h1>
        <p>Reliable • Professional • UAE-Wide Service</p>
      </section>

      {/* Company Intro */}
      <section className={styles.introSection}>
        <h2>Who We Are</h2>
        <p>
          We are a trusted heavy-equipment rental company based in the UAE,
          providing high-performance excavators and machinery for construction,
          infrastructure, and industrial projects. With years of experience in
          the industry, we understand the demands of UAE terrain and provide
          machines that deliver power, precision, and efficiency.
        </p>
      </section>

      {/* Experience Section */}
      <section className={styles.experienceSection}>
        <div className={styles.experienceCard}>
          <h3>7+ Years Experience</h3>
          <p>
            Our team has served hundreds of clients across the UAE, supporting
            large-scale projects with reliable equipment and expert guidance.
          </p>
        </div>
        <div className={styles.experienceCard}>
          <h3>100+ Projects Completed</h3>
          <p>
            From land development to foundation digging, we’ve delivered
            high-quality machinery exactly when and where it’s needed.
          </p>
        </div>
        <div className={styles.experienceCard}>
          <h3>24/7 Customer Support</h3>
          <p>
            We stay connected with our clients to ensure smooth operations,
            equipment assistance, and on-site support.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.chooseSection}>
        <h2>Why Choose Us?</h2>

        <ul className={styles.chooseList}>
          <li>
            <strong>✔ High-Performance Machines:</strong> Our excavators are
            regularly maintained and upgraded.
          </li>
          <li>
            <strong>✔ Timely Delivery Across UAE:</strong> Dubai, Abu Dhabi,
            Sharjah, Ajman, RAK, UAQ & Fujairah.
          </li>
          <li>
            <strong>✔ Trained Operators Available:</strong> Skilled, certified,
            and experienced operators for all types of sites.
          </li>
          <li>
            <strong>✔ Affordable & Transparent Pricing:</strong> No hidden
            charges — simple daily, weekly, or monthly rates.
          </li>
          <li>
            <strong>✔ Reliable & Safe Equipment:</strong> Strict safety checks
            and professional handling.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
