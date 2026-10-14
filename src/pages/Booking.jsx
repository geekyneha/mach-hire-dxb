import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Booking.module.css";
import SEO from "../components/SEO/SEO";

const Booking = () => {
  const { t } = useTranslation();
  const today = new Date().toISOString().split("T")[0];

  const equipmentOptions = [
    t("booking.equipment.excavator"),
    t("booking.equipment.wheelLoader"),
    t("booking.equipment.dumpTruck"),
    t("booking.equipment.bulldozer"),
    t("booking.equipment.backhoeLoader"),
    t("booking.equipment.mobileCrane"),
    t("booking.equipment.towerCrane"),
    t("booking.equipment.forklift"),
    t("booking.equipment.skidSteer"),
    t("booking.equipment.motorGrader"),
    t("booking.equipment.compactor"),
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    equipment: equipmentOptions[0],
    size: t("booking.size.medium"),
    duration: t("booking.duration.daily"),
    operator: t("booking.operator.with"),
    startDate: today,
    location: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z ]{3,}$/.test(form.name)) {
      newErrors.name = t("booking.validName");
    }

    if (!/^[0-9]{8,9}$/.test(form.phone)) {
      newErrors.phone = t("booking.validPhone");
    }

    if (!form.startDate) {
      newErrors.startDate = t("booking.selectDate");
    }

    if (form.location.trim().length < 3) {
      newErrors.location = t("booking.validLocation");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = t("booking.message", {
      name: form.name,
      phone: form.phone,
      equipment: form.equipment,
      size: form.size,
      duration: form.duration,
      operator: form.operator,
      startDate: form.startDate,
      location: form.location,
    });

    window.open(
      `https://wa.me/971509734271?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className={styles.booking}>
      <SEO
        title="Book Heavy Equipment Rental in UAE | UAE Machinery Rentals"
        description="Book construction equipment rental in UAE. Flexible daily, weekly, and monthly rental plans available."
        canonical="https://www.uaemachineryrentals.ae/booking"
      />

      <div className={styles.card}>
        <h2 className={styles.title}>{t("booking.title")}</h2>
        <p className={styles.subtitle}>{t("booking.subtitle")}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input
              className={styles.input}
              name="name"
              placeholder={t("booking.namePlaceholder")}
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <div className={styles.phoneWrap}>
              <span className={styles.code}>+971</span>
              <input
                className={styles.phoneInput}
                name="phone"
                placeholder={t("booking.phonePlaceholder")}
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && (
              <span className={styles.error}>{errors.phone}</span>
            )}
          </div>

          <select
            className={styles.select}
            name="equipment"
            value={form.equipment}
            onChange={handleChange}
          >
            {equipmentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <div className={styles.row}>
            <select
              className={styles.select}
              name="size"
              value={form.size}
              onChange={handleChange}
            >
              <option>{t("booking.size.small")}</option>
              <option>{t("booking.size.medium")}</option>
              <option>{t("booking.size.large")}</option>
            </select>

            <select
              className={styles.select}
              name="duration"
              value={form.duration}
              onChange={handleChange}
            >
              <option>{t("booking.duration.daily")}</option>
              <option>{t("booking.duration.weekly")}</option>
              <option>{t("booking.duration.monthly")}</option>
            </select>
          </div>

          <select
            className={styles.select}
            name="operator"
            value={form.operator}
            onChange={handleChange}
          >
            <option>{t("booking.operator.with")}</option>
            <option>{t("booking.operator.without")}</option>
          </select>

          <div className={styles.field}>
            <input
              className={styles.input}
              type="date"
              name="startDate"
              value={form.startDate}
              min={today}
              onChange={handleChange}
            />
            {errors.startDate && (
              <span className={styles.error}>{errors.startDate}</span>
            )}
          </div>

          <div className={styles.field}>
            <input
              className={styles.input}
              name="location"
              placeholder={t("booking.locationPlaceholder")}
              value={form.location}
              onChange={handleChange}
            />
            {errors.location && (
              <span className={styles.error}>{errors.location}</span>
            )}
          </div>

          <button className={styles.button} type="submit">
            {t("booking.button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
