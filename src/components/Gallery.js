import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import styles from "../styles/gallery.module.scss";

export default function Gallery(props) {
  return (
    <article>
      <ol className={styles.gallery}>
        {props.products.map(product => (
          <li key={product._id}>
            <Link
			  className={styles.link}
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
      {props.products.length === 0 && (
        <p>
          Lo lamentamos, no hay productos con esas características&nbsp;&nbsp;
          <span role="img" aria-label="sad-face">
            🥺
          </span>
        </p>
      )}
    </article>
  );
}
