import React from "react";
import Hero from "../components/Hero/Hero";
import styles from "./Home.module.css";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import Categories from "../components/Category/Categories";
import WhyChooseUs from "../components/Why_Us/WhyChooseUs";
import About from "./About";
import Industries from "../components/Industry/Industries";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <Hero />
          <Categories />
          <WhyChooseUs />
          <About />
          <Industries />
          <Testimonial />
        </div>
        <WhatsappButton />
      </main>
    </div>
  );
};

export default Home;
