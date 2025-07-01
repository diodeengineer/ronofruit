import styles from "./ProductGrid.module.css";

const products = [
  {
    id: 1,
    name: "Fuzzi Apples",
    price: "₹330 / kg",
    image: "/fruits/fuzi.png",
  },
  {
    id: 2,
    name: "Jahaji Bananas",
    price: "₹60 / dozen",
    image: "/fruits/banana.png",
  },
  {
    id: 3,
    name: "Langra Mangoes",
    price: "₹100 / kg",
    image: "/fruits/langra.png",
  },
  {
    id: 4,
    name: "Dasheri Mangoes",
    price: "₹120 / kg",
    image: "/fruits/dasheri.png",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className={styles.gridSection}>
      <h2 className={styles.heading}>Our Fresh Fruits</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
