

import HeroSection from "./components/herosection/HeroSection";
import ProductGrid from "./components/productgrid/ProductGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className={styles.main}>
        <div className={styles.ctas}>
          {/* You can add calls to action or other sections here */}
           <ProductGrid />
        </div>
      </main>
    </>
  );
}
