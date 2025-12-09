// Navbar.jsx
import React from "react";
import { Link } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>ExcavatorRent</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.links}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.links}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className={styles.links}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.links}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/booking" className={styles.links}>
            Book Now
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.links}>
            More Info
          </Link>
        </li>
        <li>
          <Link to="/faq" className={styles.links}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
