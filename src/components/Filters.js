import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import PropTypes from 'prop-types';
import styles from '../styles/filters.module.scss';
import ClothingSizes from './ClothingSizes';

const filterByPrice = ({ price }, { rangePrice }) => {
  const priceCleaned = parseFloat(price.replace('$', ''));
  return priceCleaned > rangePrice.min && priceCleaned < rangePrice.max;
};
const filterBySize = ({ size }, { sizes }) => sizes.length === 0 || sizes.includes(size);

function Filters(props) {
  const { rangePrice, onChangePrice, onChangeSize } = props;
  return (
    <article className={styles.filters}>
      <section className={styles.filtersPrice}>
        <p>Filter by price</p>
        <InputRange
          maxValue={100}
          minValue={0}
          value={rangePrice}
          formatLabel={(value) => `$${value}`}
          className={styles.filtersRange}
          onChange={onChangePrice}
        />
      </section>
      <ClothingSizes typeInput="checkbox" onChange={onChangeSize} />
    </article>
  );
}

Filters.propTypes = {
  rangePrice: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onChangePrice: PropTypes.func.isRequired,
  onChangeSize: PropTypes.func.isRequired,
};

export { filterByPrice, filterBySize, Filters };
