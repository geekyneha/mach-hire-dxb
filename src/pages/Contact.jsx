import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.heading}>Get in touch</h1>
      <p className={styles.subheading}>
        Have a question? Send us a message — we’ll reply shortly.
      </p>

      <div className={styles.card}>
        <form
          className={styles.form}
          action="mailto:youremail@example.com"
          method="POST"
          encType="text/plain"
        >
          <div className={styles.field}>
            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className={styles.btn}>
            Send message
          </button>
        </form>
      </div>

      <div className={styles.mapSection} aria-label="Our location">
        <h2 className={styles.mapTitle}>Our location</h2>
        <div className={styles.mapWrapper}>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14426.819096043698!2d55.2707826!3d25.2048496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434d9d07c89b%3A0xcd9d9b89a3455d1b!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
