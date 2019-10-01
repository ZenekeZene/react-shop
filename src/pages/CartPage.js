import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/cart.module.scss';
import { CartContext, removeItemOnCart } from '../CartContext';

function calculatePriceTotalItem(price, quantity) {
  return `$${parseFloat(price.replace('$', '')) * quantity}`;
}

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.removeItemOnCart = removeItemOnCart.bind(this);
    this.calculatePriceTotalItem = this.calculatePriceTotalItem.bind(this);
    this.state = {
      cart: [],
    };
  }

  componentWillMount() {
    this.setState({ cart: this.context });
  }

  render() {
    const { cart } = this.state;
    return (
      <main className="page-cart">
        <article className={styles.cart}>
          <section>
            <span>Image</span>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Remove</span>
          </section>
          {cart.map((item) => (
            <section key={item.product._id}>
              <span>
                <img
                  src={item.product.picture}
                  alt={item.product.short_description}
                />
              </span>
              <span>{item.product.name}</span>
              <span>{item.product.price}</span>
              <span>{item.quantity}</span>
              <span>
                {calculatePriceTotalItem(item.product.price, item.quantity)}
              </span>
              <button
                type="button"
                onClick={() => this.setState({
                  cart: this.removeItemOnCart(cart, {
                    id: item.product._id,
                    size: item.size,
                  }),
                })}
              >
                X
              </button>
            </section>
          ))}
        </article>
        <button className="button" type="button">
          <Link to="/">Continue shopping</Link>
        </button>
        <article className="cart-total">
          <ol>
            <li>
Subtotal: $
              {}
            </li>
            <li>
Total: $
              {}
            </li>
          </ol>
          <button className="button" type="button">
            Checkout
          </button>
        </article>
      </main>
    );
  }
}
CartPage.contextType = CartContext;
export default CartPage;
