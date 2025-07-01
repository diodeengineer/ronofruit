
// components/Testimonials.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    id: 1,
    name: "Sopon Baruah.",
    comment: "The fruits are always fresh and reasonably priced. Highly recommend!",
  },
  {
    id: 2,
    name: "Ratan Das.",
    comment: "Love shopping here. The owner is friendly and helpful. :)",
  },
  {
    id: 3,
    name: "Raju Mizar.",
    comment: "Best grapes in the whole area. Great quality!",
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.heading}>What Our Customers Say</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className={styles.card}>
              <p className={styles.comment}>{t.comment}</p>
              <p className={styles.name}>– {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

