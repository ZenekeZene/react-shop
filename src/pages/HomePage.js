import React, { useState } from 'react';
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import Gallery from "../components/Gallery";
import stylesFilters from "../styles/filters.module.css";
import ClothingSizes from "../components/ClothingSizes";

export default function HomePage() {
	
	const [rangePrice, setRangePrice] = useState({
		min: 5,
		max: 10,
	});
	return (
    <main className="page-home">
      <article className={stylesFilters.filters}>
        <section className={stylesFilters.filtersPrice}>
          <p>Filter by price</p>
          <InputRange
            maxValue={100}
            minValue={0}
            formatLabel={value => `$${value}`}
            value={rangePrice}
            onChange={value => setRangePrice(value)}
          />
        </section>
        <ClothingSizes typeInput="checkbox"></ClothingSizes>
      </article>
      <Gallery rangePrice={rangePrice}></Gallery>
    </main>
  );
}
