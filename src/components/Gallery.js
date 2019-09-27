import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import products from "../products";
import styles from "../styles/gallery.module.css";

const filterByPrice = ({ price }, { rangePrice }) => {
  const priceCleaned = parseFloat(price.replace("$", ""));
  return priceCleaned > rangePrice.min && priceCleaned < rangePrice.max;
};
const filterBySize = ({ size }, { sizes }) =>
  sizes.length === 0 || sizes.includes(size);

const filterProductsByPriceAndSizes = rangePrice => sizes =>
  products.filter(product =>
    [filterBySize, filterByPrice].every(f => f(product, { rangePrice, sizes }))
  );

export default function Gallery(props) {
  const filteredProducts = filterProductsByPriceAndSizes(props.rangePrice)(
    props.selectedSizes
  );
  return (
    <article>
      <ol className={styles.gallery}>
        {filteredProducts.map(product => (
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
      {filteredProducts.length === 0 && (
        <p>
          Lo lamentamos, no hay productos con esas características&nbsp;&nbsp;🥺
        </p>
      )}
    </article>
  );
}
