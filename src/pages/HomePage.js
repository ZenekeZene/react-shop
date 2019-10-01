import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import products from '../products';
import { filterByPrice, filterBySize, Filters } from '../components/Filters';

const applyFilters = (productsEntry) => ({ rangePrice, sizes }) => (
  productsEntry.filter((product) => (
    [filterBySize, filterByPrice].every((f) => (
      f(product, { rangePrice, sizes })))
  )));

export default function HomePage() {
  const [rangePrice, setRangePrice] = useState({
    min: 5,
    max: 70,
  });

  const [sizes, setSizes] = useState([]);

  return (
    <main className="page-home">
      <Filters
        rangePrice={rangePrice}
        onChangePrice={(changedRangePrice) => setRangePrice(changedRangePrice)}
        onChangeSize={(changedSizes) => setSizes(changedSizes)}
      />
      <Gallery products={applyFilters(products)({ rangePrice, sizes })} />
    </main>
  );
}
