import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer professional excavator rentals across the UAE, including Dubai, Sharjah, Abu Dhabi, and more. Our machines are well-maintained and suitable for construction, digging, demolition, and land clearing.",
  },
  {
    question: "How can I book an excavator?",
    answer:
      "You can contact us through WhatsApp, phone, or our contact form. Our team will guide you through machine selection, pricing, and booking confirmation.",
  },
  {
    question: "Do you offer operators with the machine?",
    answer:
      "Yes, all rentals come with trained and certified operators to ensure safe and efficient work.",
  },
  {
    question: "What are your rental charges?",
    answer:
      "Pricing depends on machine size, location, and rental duration. Contact us for a quick and transparent quote.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>

      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className={styles.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className={styles.answer}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
