

import styles from "./LocationMap.module.css";

export default function LocationMap() {
  return (
    <section className={styles.mapSection}>
      <h2 className={styles.heading}>Visit Us</h2>
      <div className={styles.mapContainer}>
        <iframe className={styles.iframe}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220.87253220956512!2d94.7053194402294!3d27.656693302808513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751372299350!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className={styles.address}>
          Rono Fruit Stall, Opposite Jainath Store, Likabali, Arunachal Pradesh, India
        </p>
        <a
          href="https://www.google.com/maps/place/Rono+Fruit+Stall,+Likabali"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directionsButton}
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}

