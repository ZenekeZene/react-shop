import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from '../styles/cart.module.css';

export default function CartPage() {
  return (
    <main className="page-cart">
      <article className={styles.cart}>
        <section>
          <span>Image</span>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Remove</span>
        </section>
        {/* Product loop */}
      </article>
      <button className="button">
        <Link to="/">Continue shopping</Link>
      </button>
      <article className="cart-total">
        <ol>
          <li>Subtotal: ${}</li>
          <li>Total: ${}</li>
        </ol>
        <button className="button">Checkout</button>
      </article>
    </main>
  );
}
