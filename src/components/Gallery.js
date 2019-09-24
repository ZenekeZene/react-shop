import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import products from "../products";
console.log(products);

export default function Gallery() {
  return (
    <article>
      <ol className="gallery">
        {products.map((product, index) => (
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
      {products.length === 0 && (
        <p>
          Lo lamentamos, no hay productos con esas características&nbsp;&nbsp;🥺
        </p>
      )}
    </article>
  );
}
