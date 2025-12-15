import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Equipments", path: "/equipments" },
    { name: "Car Brands", path: "/brands" },
    { name: "Our Services", path: "/services" },
    { name: "FAQs", path: "/faq" },
  ];

  const handleNavigation = (link) => {
    setActive(link.name);
    navigate(link.path);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo} onClick={() => navigate("/")}>
        DAZ
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {links.map((link) => (
          <button
            key={link.name}
            className={`${styles.navItem} ${
              active === link.name ? styles.active : ""
            }`}
            onClick={() => handleNavigation(link)}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Right Actions */}
      <div className={styles.actions}>
        <button className={styles.searchBtn}>🔍</button>
        <button
          className={styles.contactBtn}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Navbar;
