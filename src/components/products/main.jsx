import { useEffect, useState } from "react";
import styles from "./main.module.css";

import { ProductList } from "./productsList/productList";

import axios from "axios";

const productListUrl = "https://fakestoreapi.com/products";

const categoryUrl = "https://fakestoreapi.com/products/categories";

export const NewProducts = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = (startIndex + itemsPerPage) % productList.length;
    setStartIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      (startIndex - itemsPerPage + productList.length) % productList.length;
    setStartIndex(prevIndex);
  };

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(productListUrl);
      setProductList(res?.data);
    };
    const getCategories = async () => {
      const res = await axios.get(categoryUrl);
      setCategories(res?.data);
    };

    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setItemsPerPage(4);
      } else if (window.innerWidth === 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth === 1440) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentProducts = productList?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <h2>New products</h2>
          <div className={styles.imageContainer}>
            <img src="starLine.png" alt="line" />
          </div>
        </div>

        <div className={styles.arrowContainer}>
          <img src="leftArrow.png" alt="arrow1" onClick={prevSlide} />

          <img src="rightArrow.png" alt="arrow2" onClick={nextSlide} />
        </div>
      </div>
      <div className={styles.productContainer}>
        <ul className={styles.filterList}>
          {categories?.map((category) => (
            <li key={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>

        <ProductList list={currentProducts} />
      </div>

      <div
        className={`${styles.arrowContainer} ${styles.secondaryArrowContainer}`}
      >
        <img src="leftArrow.png" alt="arrow1" onClick={prevSlide} />

        <img src="rightArrow.png" alt="arrow2" onClick={nextSlide} />
      </div>
    </div>
  );
};
