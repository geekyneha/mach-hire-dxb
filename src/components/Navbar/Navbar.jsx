import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const links = [
    "Home",
    "About Us",
    "Equipments",
    "Car Brands",
    "Our Services",
    "FAQs",
  ];

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>Dream Drive</div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {links.map((link) => (
          <button
            key={link}
            className={`${styles.navItem} ${
              active === link ? styles.active : ""
            }`}
            onClick={() => setActive(link)}
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Right Actions */}
      <div className={styles.actions}>
        <button className={styles.searchBtn}>🔍</button>
        <button className={styles.contactBtn}>Contact Us</button>
      </div>
    </header>
  );
};

export default Navbar;
