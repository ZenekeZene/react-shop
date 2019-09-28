import React, { useState } from "react";
import Gallery from "../components/Gallery";
import products from "../products";
import { Filters, filterByPrice, filterBySize } from "../components/Filters";

const applyFilters = products => ({ rangePrice, sizes }) =>
  products.filter(product =>
    [filterBySize, filterByPrice].every(f => f(product, { rangePrice, sizes }))
  );

export default function HomePage() {
  const [rangePrice, setRangePrice] = useState({
    min: 5,
    max: 70
  });

  const [sizes, setSizes] = useState([]);

  return (
    <main className="page-home">
      <Filters
		rangePrice={rangePrice}
        onChangePrice={rangePrice => setRangePrice(rangePrice)}
        onChangeSize={sizes => setSizes(sizes)}
      ></Filters>
      <Gallery
        products={applyFilters(products)({ rangePrice, sizes })}
      ></Gallery>
    </main>
  );
}
