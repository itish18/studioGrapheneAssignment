import { useState } from "react";
import styles from "./navbar.module.css";

const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  {
    name: "Our Products",
    id: "product",
    child: [
      { name: "Product 1", id: "p1" },
      { name: "Product 2", id: "p2" },
      { name: "Product 3", id: "p3" },
      { name: "Product 4", id: "p4" },
    ],
  },
  { name: "Contact Us", id: "contact" },
];

export const Navbar = ({ toggleModal }) => {
  const [showProducts, setShowProducts] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const toggleProducts = () => {
    setShowProducts((prev) => !prev);
    setClickedItem(null);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.heading}>
        <h2>ShopKart</h2>
        <div className={styles.cart}>
          <span>Wishlist (0)</span>
          <span>Bag (0)</span>
        </div>
        <div className={styles.hamContainer}>
          <img
            src="hamburger.png"
            alt="hamburger"
            className={styles.hamburger}
            onClick={() => toggleModal()}
          />
        </div>
      </div>
      <img src="line.png" alt="line" className={styles.lineImage} />
      <div className={styles.line} />

      <ul className={styles.navbar}>
        {navbar.map((item) => (
          <li
            key={item.id}
            className={`${styles.navItem}  ${
              clickedItem === item.id || (item.id === "product" && showProducts)
                ? styles.addNavBorder
                : ""
            } ${item.id === "product" ? styles.navItemRelative : ""}`}
            onClick={() => {
              if (item.id === "product") {
                toggleProducts();
              } else {
                setClickedItem(item.id);
                setShowProducts(false);
              }
            }}
          >
            {item.name}

            {item.id === "product" && showProducts && (
              <ul className={styles.subnav}>
                {item.child.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
