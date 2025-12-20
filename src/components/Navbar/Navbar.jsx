import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./Navbar.module.css";
import logo from "/images/logo.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Booking", path: "/booking" },
    { name: "Our Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "FAQs", path: "/faq" },
  ];

  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Set active link based on current path
  useEffect(() => {
    const currentLink = links.find((link) => link.path === location.pathname);
    setActive(currentLink ? currentLink.name : "");
  }, [location.pathname]);

  const handleNavigation = (link) => {
    setActive(link.name);
    navigate(link.path);
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* LOGO */}
      <div
        className={styles.logo}
        onClick={() => navigate("/")}
        aria-label="UAE Machinery Rentals Home"
      >
        <img
          src={logo}
          alt="UAE Machinery Rentals logo"
          className={styles.logoImg}
          width="42"
          height="42"
          loading="eager"
        />
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

      {/* Actions */}
      <div className={styles.actions}>
        <a
          href="tel:+971509734271"
          className={styles.contactBtn}
          aria-label="Call UAE Machinery Rentals"
        >
          Contact Us
        </a>
      </div>

      {/* Hamburger */}
      <div
        className={styles.hamburger}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={styles.mobileBox}>
          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
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
