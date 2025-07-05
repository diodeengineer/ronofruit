

import ChatBotClient from "./components/chatbot/Chatbot";
import HeroSection from "./components/herosection/HeroSection";
import LocationMap from "./components/locationmap/LocationMap";
import ProductGrid from "./components/productgrid/ProductGrid";
import Testimonials from "./components/testimonial/Testimonial";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
        <ChatBotClient />

      <HeroSection />
      <main className={styles.main}>
        <ProductGrid />
        <Testimonials />
        <LocationMap />
      </main>
    </>
  );
}