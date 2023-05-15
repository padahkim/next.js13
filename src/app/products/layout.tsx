import styles from "./layout.module.css";
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <a href="/products/man" className={styles.h2}>
          Men
        </a>
        <a href="/products/woman" className={styles.h2}>
          Women
        </a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
