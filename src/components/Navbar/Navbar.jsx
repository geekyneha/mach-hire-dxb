// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>ExcavatorRent</div>

      {/* Menu Toggle Button */}
      <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      <ul className={`${styles.navLinks} ${open ? styles.open : ""}`}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/booking" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(false)}>
            More Info
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={() => setOpen(false)}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
