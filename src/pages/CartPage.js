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
    this.state = {
      cart: [],
    };
  }

  componentWillMount() {
    this.setState({ cart: this.context });
  }

  getTotalPriceCart() {
    const { cart } = this.state;
    return cart.reduce(
      (accumulator, item) => accumulator
         + parseFloat(item.product.price.replace('$', '')) * item.quantity,
      0,
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <main className="page-cart">
        {cart.length > 0 && (
          <>
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
                    onClick={() => {
                      this.setState({
                        cart: this.removeItemOnCart(cart, {
                          id: item.product._id,
                          size: item.size,
                        }),
                      });
                    }}
                  >
                    Delete
                  </button>
                </section>
              ))}
            </article>
            <article className={styles.cartTotal}>
              <ol>
                <li>
                  Total: $
                  {this.getTotalPriceCart()}
                </li>
              </ol>
              <button type="button" className="--secondary">
                Checkout
              </button>
              <Link to="/">Continue shopping</Link>
            </article>
          </>
        )}
        {cart.length === 0 && (
          <>
            <p>Aún no hay elementos en el carrito.</p>
            <Link to="/">Continue shopping</Link>
          </>
        )}
      </main>
    );
  }
}
CartPage.contextType = CartContext;
export default CartPage;
