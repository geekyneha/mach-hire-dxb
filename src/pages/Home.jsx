import Hero from "../components/Hero/Hero";
import styles from "./Home.module.css";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import Categories from "../components/Category/Categories";
import WhyChooseUs from "../components/Why_Us/WhyChooseUs";
import Industries from "../components/Industry/Industries";
import Testimonial from "../components/Testimonial/Testimonial";
import OrganizationSchema from "../components/SEO/OrganizationSchema";
import SEO from "../components/SEO/SEO";
import Stats from "../components/Projects/Stats";
import Videos from "../components/Projects/Videos";

const Home = () => {
  return (
    <div className={styles.home}>
      <SEO
        title="UAE Machinery Rentals | Heavy Equipment Rental in UAE"
        description="UAE Machinery Rentals offers a wide range of heavy equipment for rent in UAE, including excavators, loaders, bulldozers, and more. Flexible rental plans available."
        canonical="https://www.uaemachineryrentals.ae/"
      />
      <OrganizationSchema />
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <Hero />
          <Categories />
          <WhyChooseUs />
          <Stats />
          <Industries />
          <Testimonial />
          <Videos />
          <WhatsappButton />
        </div>
      </main>
    </div>
  );
};

export default Home;
