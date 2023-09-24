import styles from "./modal.module.css";

export const Modal = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.box}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>OUR PRODUCTS</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  );
};
