


"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">Rono Fruit Stall</Link>
        </h1>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <Link className={styles.navLink} href="/">Home</Link>
          <Link className={styles.navLink} href="/products">Products</Link>
          <Link className={styles.navLink} href="/about">About</Link>
          <Link className={styles.navLink} href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
