import Hero from "../components/Hero/Hero";
import styles from "./Home.module.css";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import Categories from "../components/Category/Categories";
import WhyChooseUs from "../components/Why_Us/WhyChooseUs";
import About from "./About";
import Industries from "../components/Industry/Industries";
import Testimonial from "../components/Testimonial/Testimonial";
import OrganizationSchema from "../components/SEO/OrganizationSchema";
import SEO from "../components/SEO/SEO";

const Home = () => {
  return (
    <div className={styles.home}>
      <SEO
        title="UAE Machinery Rentals | Heavy Equipment Rental in UAE"
        description="UAE Machinery Rentals provides excavators, dump trucks, cranes, forklifts, and heavy equipment for rent across UAE. Reliable machines, flexible rental plans."
        canonical="https://uaemachineryrentals.ae/"
      />

      <OrganizationSchema />
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <Hero />
          <Categories />
          <WhyChooseUs />
          <About />
          <Industries />
          <Testimonial />
          <WhatsappButton />
        </div>
      </main>
    </div>
  );
};

export default Home;
