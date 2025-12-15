import { useState } from "react";
import styles from "./FAQ.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What types of equipment do you offer for rent?",
    answer:
      "We offer a wide range of heavy machinery including excavators, wheel loaders, dump trucks, bulldozers, cranes, forklifts, and more.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a quote through our website, by calling our team, or via WhatsApp. Simply provide your project details and equipment requirements.",
  },
  {
    question: "Do you provide equipment with operators?",
    answer:
      "Yes, we offer both equipment-only rentals and equipment with experienced operators, depending on your project needs.",
  },
  {
    question: "How is equipment maintenance handled?",
    answer:
      "All equipment is regularly inspected and maintained according to industry standards to ensure safety, reliability, and optimal performance.",
  },
  {
    question: "What is the minimum rental period?",
    answer:
      "Rental periods are flexible and can range from daily to long-term contracts based on your requirements.",
  },
  {
    question: "Do you offer delivery and pickup services?",
    answer:
      "Yes, we provide timely delivery and pickup services to ensure your project runs smoothly without delays.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>FAQ</span>
        <h1>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Find answers to common questions about our equipment rental services.
        </p>

        <div className={styles.list}>
          {faqs.map((item, index) => (
            <div className={styles.item} key={index}>
              <button className={styles.question} onClick={() => toggle(index)}>
                <span>{item.question}</span>
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </button>

              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
