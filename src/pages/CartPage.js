import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default function CartPage() {
	return (
    <article>
      <h1>Cart</h1>
      <Link to="/">Volver</Link>
    </article>
  );
}
