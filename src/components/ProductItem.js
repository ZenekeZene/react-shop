import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/product-item.module.scss';

function convertLiteralSize(size) {
  return size.charAt(0).toUpperCase();
}

function ProductItem(props) {
  const { productInfo, isMini, productActions } = props;

  return (
    <article className={`${styles.item} product-item ${!isMini && styles.itemDetail}`}>
      <img
        src={productInfo.picture}
        className={styles.item__image}
        alt={productInfo.description_short}
      />
      <section className={styles.item__info}>
        <h2>{productInfo.name}</h2>
        <p>{productInfo.description_short}</p>
        {!isMini && <p>{productInfo.description}</p>}
        {isMini && (
          <p className={styles.item__size}>
            {convertLiteralSize(productInfo.size)}
          </p>
        )}
        <p className={styles.item__price}>{productInfo.price}</p>
        {productActions}
      </section>
      {productInfo.onSale && <span className={styles.onSale}>SALE</span>}
    </article>
  );
}

ProductItem.propTypes = {
  productInfo: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    description: PropTypes.string,
    description_short: PropTypes.string,
    price: PropTypes.string,
    size: PropTypes.string,
    onSale: PropTypes.bool,
  }).isRequired,
  isMini: PropTypes.bool,
  productActions: PropTypes.element,
};

ProductItem.defaultProps = {
  isMini: false,
  productActions: null,
};

export default ProductItem;
