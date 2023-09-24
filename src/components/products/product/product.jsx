import styles from "./product.module.css";

export const Product = ({ id, title, image, description, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <div className={styles.productUrl}>
          <img src="urlArrow.png" alt="arrow" />
        </div>
      </div>
      <div className={styles.productDetails}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};
