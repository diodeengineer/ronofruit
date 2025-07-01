


import styles from "./HeroSection.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Fresh Fruits Honest Price</h1>
        <p className={styles.subtitle}>No hype just local and seasonal fruits at your nearby stall.</p>
        <Link  href="#products" className={styles.button}>
          Shop Now
        </Link>
      </div>
    </section>
  );
}
