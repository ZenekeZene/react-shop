import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store as notificationHandler } from 'react-notifications-component';
import ProductItem from '../components/ProductItem';
import ClothingSizes from '../components/ClothingSizes';
import getProductByIdFromCloud from '../api';
import { CartContext, addItemOnCart } from '../CartContext';

class ShopSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null,
      isLoading: true,
      quantity: 1,
      size: '',
    };
  }

  componentDidMount() {
    const { location, match } = this.props;
    const { infoProduct } = this.state;
    this.setState({ productInfo: location.data });
    if (!infoProduct) {
      getProductByIdFromCloud({ id: match.params.id })
        .then((response) => {
          this.setState({ productInfo: response.product, isLoading: false });
        })
        .catch((err) => {
          throw Object.assign(new Error(err), {
            type: 'getProductByIdFromCloud',
          });
        });
    }
  }

  handAddToCart() {
    const { quantity, productInfo, size } = this.state;
    if (quantity > 0) {
      this.setState({ quantity: 1 });
      addItemOnCart(this.context, {
        product: productInfo,
        quantity,
        size: size[0],
      });
      notificationHandler.addNotification({
        title: 'Perfect!',
        message: 'Product added',
        type: 'success',
        insert: 'bottom',
        container: 'bottom-center',
        className: 'customNotification',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }
  }

  render() {
    const { isLoading, productInfo, quantity } = this.state;
    return (
      <main className="page-shop-single">
        {!isLoading && (
          <ProductItem
            productInfo={productInfo}
            isMini={false}
            productActions={(
              <>
                <input
                  type="number"
                  min="0"
                  value={quantity}
                  onChange={(e) => this.setState({ quantity: Number(e.target.value) })}
                />
                X
                <ClothingSizes
                  typeInput="radio"
                  onChange={(sizes) => this.setState({ size: sizes })}
                />
                <button
                  type="button"
                  className="--primary"
                  onClick={this.handAddToCart.bind(this)}
                >
                  Add to cart
                </button>
                <button type="button" className="--secondary">
                  <Link to="/cart">Go to checkout</Link>
                </button>
                <Link to="/">Continue shopping</Link>
              </>
            )}
          />
        )}
      </main>
    );
  }
}
ShopSingle.contextType = CartContext;

ShopSingle.propTypes = {
  match: {
    params: {
      id: PropTypes.string,
    }.isRequired,
  }.isRequired,
  location: {
    data: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  }.isRequired,
};
export default ShopSingle;
