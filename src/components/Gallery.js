import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import products from "../products";
import styles from "../styles/gallery.module.css";

function filterProductsByPrice(rangePrice) {
  return products.filter(product => {
    const priceCleaned = parseFloat(product.price.replace("$", ""));
    return priceCleaned > rangePrice.min && priceCleaned < rangePrice.max;
  });
}

export default function Gallery(props) {
  const productsFiltered = filterProductsByPrice(props.rangePrice);
  return (
    <article>
      <ol className={styles.gallery}>
        {productsFiltered.map((product, index) => (
          <li key={product._id}>
            <Link
              to={{
                pathname: `/shop-single/${product._id}`,
                data: product
              }}
            >
              <ProductItem productInfo={product} isMini></ProductItem>
            </Link>
          </li>
        ))}
      </ol>
      {productsFiltered.length === 0 && (
        <p>
          Lo lamentamos, no hay productos con esas características&nbsp;&nbsp;🥺
        </p>
      )}
    </article>
  );
}
