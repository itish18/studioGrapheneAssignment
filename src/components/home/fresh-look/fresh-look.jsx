import styles from "./freshLook.module.css";
import { StarLine } from "../star-line/star-line";

export const FreshLook = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.headingcontainer}>
          <div className={`${styles.heading} ${styles.fresh} `}>Fresh</div>
          <div className={`${styles.heading} ${styles.date} `}>2022</div>
          <div className={`${styles.heading} ${styles.look} `}>Look</div>
          <StarLine />
        </div>

        <div className={styles.orangeBox} />
        <div className={styles.imgContainer}>
          <img src="model.png" alt="model" className={styles.image} />
          <div className={styles.jacketDetails}>
            <span>OREGON JACKET</span>
            <span>$124</span>
          </div>
        </div>
      </div>
      <div className={styles.seeMore}>See more</div>
    </div>
  );
};
