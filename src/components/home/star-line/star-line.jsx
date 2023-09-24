import styles from "./star-line.module.css";

export const StarLine = () => {
  return (
    <div className={styles.lineContainer}>
      <div className={styles.line} />
      <img src="star.png" alt="star" className={styles.star} />
    </div>
  );
};
