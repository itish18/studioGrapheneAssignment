import styles from "./main.module.css";

import { Navbar } from "../navbar/navbar";
import { FreshLook } from "./fresh-look/fresh-look";

export const Home = ({ showModal, toggleModal }) => {
  return (
    <div className={styles.container}>
      <Navbar toggleModal={toggleModal} />
      {!showModal && <FreshLook />}
    </div>
  );
};
