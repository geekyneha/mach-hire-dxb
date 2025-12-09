import React from "react";
import Hero from "../components/Hero/Hero";
import styles from "./Home.module.css";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

const Home = () => {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <Hero />
        </div>
        <WhatsappButton />
      </main>
    </div>
  );
};

export default Home;
