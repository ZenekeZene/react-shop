import React, { Component } from 'react';
import Gallery from "../components/Gallery";
import stylesFilters from "../styles/filters.module.css";
import ClothingSizes from "../components/ClothingSizes";

export default function HomePage() {
	return (
    <main className="page-home">
      <article className={stylesFilters.filters}>
        <section className={stylesFilters.filtersPrice}>
          <p>Filter by price</p>
          <span>-</span>
          <span></span>
        </section>
        <ClothingSizes typeInput="checkbox"></ClothingSizes>
      </article>
      <Gallery></Gallery>
    </main>
  );
}
