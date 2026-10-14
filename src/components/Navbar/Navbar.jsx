import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import styles from "./Navbar.module.css";
import logo from "/images/logo.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const isArabic = i18n.language.startsWith("ar");

  const links = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "projects", path: "/projects" },
    { key: "booking", path: "/booking" },
    { key: "services", path: "/services" },
    { key: "careers", path: "/careers" },
    { key: "faqs", path: "/faq" },
  ];

  // Update document language and direction
  useEffect(() => {
    const language = i18n.language.startsWith("ar") ? "ar" : "en";

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    localStorage.setItem("site-language", language);
  }, [i18n.language]);

  // Set active navigation link from the current URL
  useEffect(() => {
    setActive(location.pathname);
    setOpen(false);
  }, [location.pathname]);

  // Switch between English and Arabic
  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
  };

  // Navigate to the selected page
  const handleNavigation = (link) => {
    navigate(link.path);
    setActive(link.path);
    setOpen(false);
  };

  // Render navigation links using the same component in both languages
  const renderLinks = (mobile = false) =>
    links.map((link) => (
      <button
        key={link.path}
        type="button"
        className={[
          mobile ? styles.mobileItem : styles.navItem,
          active === link.path
            ? mobile
              ? styles.activeMobile
              : styles.active
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => handleNavigation(link)}
      >
        {t(`nav.${link.key}`)}
      </button>
    ));

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div
        className={styles.logo}
        onClick={() => navigate("/")}
        role="button"
        tabIndex={0}
        aria-label={t("nav.home")}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            navigate("/");
          }
        }}
      >
        <img
          src={logo}
          alt="UAE Machinery Rentals"
          className={styles.logoImg}
          width="42"
          height="42"
          loading="eager"
        />

        <span className={styles.logoText}>MACHINERY RENTALS</span>
      </div>

      {/* Desktop navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        {renderLinks()}
      </nav>

      {/* Desktop actions */}
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.languageBtn}
          onClick={toggleLanguage}
          aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
        >
          {isArabic ? "English" : "العربية"}
        </button>

        <a
          href="tel:+971509734271"
          className={styles.contactBtn}
          aria-label={t("nav.contact")}
        >
          {t("nav.contact")}
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className={styles.mobileBox} id="mobile-navigation">
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <nav aria-label="Mobile navigation">{renderLinks(true)}</nav>

          <button
            type="button"
            className={styles.languageBtn}
            onClick={toggleLanguage}
          >
            {isArabic ? "English" : "العربية"}
          </button>

          <a href="tel:+971509734271" className={styles.contactBtn}>
            {t("nav.contact")}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
