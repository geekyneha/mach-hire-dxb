import React from "react";
import styles from "./CallButton.module.css";
import { FiPhone } from "react-icons/fi";

const CallButton = () => {
  return (
    <a
      href="tel:+971509734271"
      className={styles.callBtn}
      aria-label="Call UAE Machinery Rentals"
    >
      <FiPhone className={styles.callIcon} />
    </a>
  );
};

export default CallButton;
