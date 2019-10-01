import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import styles from '../styles/gallery.module.scss';

function Gallery(props) {
  const { products } = props;
  return (
    <article>
      <ol className={styles.gallery}>
        {products.map((product) => (
          <li key={product._id}>
            <Link
              className={styles.link}
              to={{
                pathname: `/shop-single/${product._id}`,
                data: product,
              }}
            >
              <ProductItem productInfo={product} isMini />
            </Link>
          </li>
        ))}
      </ol>
      {products.length === 0 && (
        <p>
          Lo lamentamos, no hay productos con esas características&nbsp;&nbsp;
          <span role="img" aria-label="sad-face">
            🥺
          </span>
        </p>
      )}
    </article>
  );
}
Gallery.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
