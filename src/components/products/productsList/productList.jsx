import { Product } from "../product/product";

import styles from "./productList.module.css";

export const ProductList = ({ list }) => {
  return (
    <div className={styles.container}>
      {list.map((product) => (
        <div key={product.id} className={styles.productSlide}>
          <Product {...product} />
        </div>
      ))}
    </div>
  );
};
