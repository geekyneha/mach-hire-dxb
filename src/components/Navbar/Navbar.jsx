import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },

    { name: "Booking", path: "/booking" },
    { name: "Our Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "FAQs", path: "/faq" },
  ];

  const handleNavigation = (link) => {
    setActive(link.name);
    navigate(link.path);
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className={styles.logoImg} />
        <span className={styles.logoText}>MACHINERY RENTALS</span>
      </div>

      {/* Desktop Nav */}
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

      <div className={styles.actions}>
        <button className={styles.contactBtn} href="tel:+971509734271">
          Contact Us
        </button>
      </div>

      {/* Hamburger */}
      <div className={styles.hamburger} onClick={() => setOpen(true)}>
        <span />
        <span />
        <span />
      </div>

      {/* Mobile dropdown box */}
      {open && (
        <div className={styles.mobileBox}>
          <button className={styles.closeBtn} onClick={() => setOpen(false)}>
            ✕
          </button>

          {links.map((link) => (
            <button
              key={link.name}
              className={`${styles.mobileItem} ${
                active === link.name ? styles.activeMobile : ""
              }`}
              onClick={() => handleNavigation(link)}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
