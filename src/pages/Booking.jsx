import { useState } from "react";
import styles from "./Booking.module.css";

const Booking = () => {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    equipment: "Excavator",
    size: "Medium",
    duration: "Daily",
    operator: "With Operator",
    startDate: today,
    location: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z ]{3,}$/.test(form.name)) {
      newErrors.name = "Enter a valid name";
    }

    if (!/^[0-9]{8,9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid UAE number";
    }

    if (!form.startDate) {
      newErrors.startDate = "Select a start date";
    }

    if (form.location.trim().length < 3) {
      newErrors.location = "Enter a valid location";
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

    const message = `
Hello,

I would like to request a quotation for heavy machinery rental in the UAE.

👤 Customer Details
Name: ${form.name}
Phone: +971 ${form.phone}

🛠 Equipment Details
Equipment: ${form.equipment}
Size: ${form.size}
Rental Duration: ${form.duration}
Operator: ${form.operator}
Start Date: ${form.startDate}

📍 Site Location
${form.location}

Please share availability, rental rates, and terms.

Thank you.
`;

    window.open(
      `https://wa.me/971509734271?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className={styles.booking}>
      <div className={styles.card}>
        <h2 className={styles.title}>Book Your Equipment</h2>
        <p className={styles.subtitle}>
          Request a quotation quickly via WhatsApp
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={styles.field}>
            <input
              className={styles.input}
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          {/* Phone */}
          <div className={styles.field}>
            <div className={styles.phoneWrap}>
              <span className={styles.code}>+971</span>
              <input
                className={styles.phoneInput}
                name="phone"
                placeholder="5XXXXXXXX"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && (
              <span className={styles.error}>{errors.phone}</span>
            )}
          </div>

          {/* Equipment */}
          <select
            className={styles.select}
            name="equipment"
            value={form.equipment}
            onChange={handleChange}
          >
            <option>Excavator</option>
            <option>Wheel Loader</option>
            <option>Dump Truck</option>
            <option>Bulldozer</option>
            <option>Backhoe Loader</option>
            <option>Mobile Crane</option>
            <option>Tower Crane</option>
            <option>Forklift</option>
            <option>Skid Steer Loader</option>
            <option>Motor Grader</option>
            <option>Compactor / Roller</option>
          </select>

          {/* Size & Duration */}
          <div className={styles.row}>
            <select
              className={styles.select}
              name="size"
              value={form.size}
              onChange={handleChange}
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <select
              className={styles.select}
              name="duration"
              value={form.duration}
              onChange={handleChange}
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          {/* Operator */}
          <select
            className={styles.select}
            name="operator"
            value={form.operator}
            onChange={handleChange}
          >
            <option>With Operator</option>
            <option>Without Operator</option>
          </select>

          {/* Start Date */}
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

          {/* Location */}
          <div className={styles.field}>
            <input
              className={styles.input}
              name="location"
              placeholder="Site Location"
              value={form.location}
              onChange={handleChange}
            />
            {errors.location && (
              <span className={styles.error}>{errors.location}</span>
            )}
          </div>

          <button className={styles.button} type="submit">
            Book via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
