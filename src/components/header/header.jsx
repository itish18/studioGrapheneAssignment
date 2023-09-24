import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.policyBox}>
        <li className={styles.commonLinks}>
          <div className={styles.delivery}>
            <img src="truck.png" alt="truck" className={styles.image} />
            Free Delivery
          </div>
        </li>
        <div className={styles.line} />
        <li className={styles.commonLinks}>Return policy</li>
      </div>
      <div className={styles.links}>
        <div className={styles.login}>
          <li className={styles.commonLinks}>Login</li>
          <li className={`${styles.commonLinks} ${styles.followUs}`}>
            Follow US
          </li>
        </div>
        <ul className={styles.socialIconList}>
          <li className={styles.socialLinks}>
            <img src="facebook.png" alt="facebook" className={styles.image} />
          </li>
          <li className={styles.socialLinks}>
            <img src="linkedin.png" alt="linkedin" className={styles.image} />
          </li>
          <li className={styles.socialLinks}>
            <img src="twitter.png" alt="twitter" className={styles.image} />
          </li>
          <li className={styles.socialLinks}>
            <img src="insta.png" alt="insta" className={styles.image} />
          </li>
        </ul>
      </div>
    </div>
  );
};
