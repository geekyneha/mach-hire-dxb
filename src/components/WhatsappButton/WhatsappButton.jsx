import React from "react";
import styles from "./WhatsappButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "971509734271"; // change to your real UAE number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
};

export default WhatsappButton;
