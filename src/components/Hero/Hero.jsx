import styles from "./Hero.module.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Rent Excavators Easily in UAE</h1>
          <p>
            Fast, reliable, and cost-effective solutions for all your
            construction needs.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
