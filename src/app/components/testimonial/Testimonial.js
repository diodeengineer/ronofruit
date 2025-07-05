
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
  ,
  {
    id: 4,
    name: "Sourav",
    comment: "Often visit them, they have the best local fruits. The start-fruits are a must-try!",
  }
    ,
    {
        id: 5,
        name: "Gajanad Kashat",
        comment: "All puja samagries are available here. The owner is very helpful and friendly, he helped me find all the items I needed for the puja. Thank you!",
    },
    ];

export default function Testimonials() {
  return (

  <section className={styles.testimonialsSection}>
  <h2 className={styles.heading}>What Our Customers Say</h2>
  <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      style={{ paddingBottom: "2rem" }} // Extra space for pagination dots
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id} style={{ height: "auto" }}>
          <div className={styles.card}>
            <p className={styles.comment}>{t.comment}</p>
            <p className={styles.name}>– {t.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

    
  );
}

