import { useState } from "react";
import styles from "./FAQ.module.css";
import SEO from "../components/SEO/SEO";

const faqs = [
  {
    question: "What types of equipment do you provide?",
    answer:
      "We provide excavators, wheel loaders, dump trucks, backhoe loaders, and other heavy machinery for construction and industrial use.",
  },
  {
    question: "Do you offer daily, weekly, and monthly rentals?",
    answer:
      "Yes, all our equipment is available for flexible rental durations including daily, weekly, and monthly plans.",
  },
  {
    question: "Is an operator included with the equipment?",
    answer:
      "Operators can be provided on request. Please mention this during your booking for accurate pricing.",
  },
  {
    question: "Which areas do you serve in the UAE?",
    answer: "We operate across Dubai, Sharjah, and Ajman.",
  },
  {
    question: "How can I book equipment?",
    answer:
      "You can book instantly via WhatsApp using our booking form. Our team will confirm availability shortly.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.wrapper}>
      <SEO
        title="Equipment Rental FAQ | UAE Machinery Rentals"
        description="Frequently asked questions about heavy equipment rental in UAE including pricing, rental duration, and availability."
        canonical="https://www.uaemachineryrentals.ae/faq"
      />

      <div className={styles.header}>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before renting equipment</p>
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
