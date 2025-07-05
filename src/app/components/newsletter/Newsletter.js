

"use client";

import { useState } from "react";
import styles from "./Newsletter.module.css";
import LocationMap from "../locationmap/LocationMap";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <section className={styles.section}>
      {/* Newsletter */}
      <div className={styles.newsletter}>
        <h2 className={styles.heading}>Subscribe to our Newsletter 📬</h2>
        {submitted ? (
          <p className={styles.success}>Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        )}
        {error && <p className={styles.error}>{error}</p>}
      </div>

      {/* Visit Us */}
      <div className={styles.visitUs}>
        <LocationMap />
      </div>
    </section>
  );
}
