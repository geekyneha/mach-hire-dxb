import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import SEO from "../components/SEO/SEO";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactPage}>
      <SEO
        title="Contact Us | UAE Machinery Rentals"
        description="Get in touch with UAE Machinery Rentals for heavy equipment rental services in Dubai, Sharjah, and Ajman."
        canonical="https://www.uaemachineryrentals.ae/contact"
      />
      <h1 className={styles.heading}>{t("contact.heading")}</h1>
      <p className={styles.subheading}>{t("contact.subheading")}</p>

      <div className={styles.card}>
        <form
          className={styles.form}
          action="mailto:youremail@example.com"
          method="POST"
          encType="text/plain"
        >
          <div className={styles.field}>
            <label htmlFor="email">{t("contact.emailLabel")}</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">{t("contact.messageLabel")}</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className={styles.btn}>
            {t("contact.send")}
          </button>
        </form>
      </div>

      <div className={styles.mapSection} aria-label={t("contact.mapTitle")}>
        <h2 className={styles.mapTitle}>{t("contact.mapTitle")}</h2>
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
