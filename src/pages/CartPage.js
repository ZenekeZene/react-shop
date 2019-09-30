import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/cart.module.css";
import { CartContext, removeItemOnCart } from "../CartContext";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.removeItemOnCart = removeItemOnCart.bind(this);
    this.calculatePriceTotalItem = this.calculatePriceTotalItem.bind(this);
  }

  calculatePriceTotalItem(price, quantity) {
    return `$${parseFloat(price.replace("$", "")) * quantity}`;
  }

  render() {
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
          <CartContext.Consumer>
            {cart =>
              cart.map((item, index) => (
                <section key={index}>
                  <span>
                    <img src={item.product.picture} />
                  </span>
                  <span>{item.product.name}</span>
                  <span>{item.product.price}</span>
                  <span>{item.quantity}</span>
                  <span>
                    {this.calculatePriceTotalItem(
                      item.product.price,
                      item.quantity
                    )}
                  </span>
                  <span
                    onClick={() => this.removeItemOnCart(cart, {
                      id: item.product._id
                    })}
                  >
                    X
                  </span>
                </section>
              ))
            }
          </CartContext.Consumer>
        </article>
        <button className="button">
          <Link to="/">Continue shopping</Link>
        </button>
        <article className="cart-total">
          <ol>
            <li>Subtotal: ${}</li>
            <li>Total: ${}</li>
          </ol>
          <button className="button">Checkout</button>
        </article>
      </main>
    );
  }
}
CartPage.contextType = CartContext;
export default CartPage;
