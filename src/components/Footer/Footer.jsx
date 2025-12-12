import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <h2>ExcavatorRent</h2>
          <p>Reliable excavator rental services across the UAE</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: info@excavatorrent.com</p>
          <p>Phone: +971 509734271</p>
        </div>
      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} ExcavatorRent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
