import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import styles from "../styles/filters.module.scss";
import ClothingSizes from "../components/ClothingSizes";

const filterByPrice = ({ price }, { rangePrice }) => {
  const priceCleaned = parseFloat(price.replace("$", ""));
  return priceCleaned > rangePrice.min && priceCleaned < rangePrice.max;
};
const filterBySize = ({ size }, { sizes }) =>
  sizes.length === 0 || sizes.includes(size);

export { filterByPrice, filterBySize };

export function Filters(props) {
  return (
    <article className={styles.filters}>
      <section className={styles.filtersPrice}>
        <p>Filter by price</p>
        <InputRange
          maxValue={100}
          minValue={0}
          value={props.rangePrice}
          formatLabel={value => `$${value}`}
		  className={styles.filtersRange}
          onChange={props.onChangePrice}
        />
      </section>
      <ClothingSizes
        typeInput="checkbox"
        onChange={props.onChangeSize}
      ></ClothingSizes>
    </article>
  );
}
