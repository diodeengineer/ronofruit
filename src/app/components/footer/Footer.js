
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Rono Fruit Stall.</p>
        <p> All rights reserved. </p>
        <div>
          <a className={styles.link} href="/privacy">Privacy Policy</a>
          <a className={styles.link} href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
