import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./FAQ.module.css";
import SEO from "../components/SEO/SEO";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  return (
    <section className={styles.wrapper}>
      <SEO
        title="Equipment Rental FAQ | UAE Machinery Rentals"
        description="Frequently asked questions about heavy equipment rental in UAE including pricing, rental duration, and availability."
        canonical="https://www.uaemachineryrentals.ae/faq"
      />

      <div className={styles.header}>
        <h2>{t("faq.heading")}</h2>
        <p>{t("faq.subheading")}</p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              openIndex === index ? styles.open : ""
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className={styles.question}>
              <span>{faq.question}</span>
              <span className={styles.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
