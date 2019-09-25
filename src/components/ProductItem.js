import React, { Component } from 'react';
import styles from "../styles/product-item.module.css";

export default function ProductItem(props) {
	const productInfo = props.productInfo;
	const isMini = props.isMini;

	return (
    <article className={styles.item}>
      <img src={productInfo.picture} className={styles.item__image} />
      <section className={styles.item__info}>
        <h2>{productInfo.name}</h2>
        <p>{productInfo.description_short}</p>
        {!isMini && <p>{productInfo.description}</p>}

        <p className={styles.item__price}>{productInfo.price}</p>
        {props.productActions}
      </section>
      {productInfo.onSale && <span className={styles.onSale}>SALE</span>}
    </article>
  );
}
