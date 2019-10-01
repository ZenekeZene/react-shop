import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/cart.module.scss";
import { CartContext, removeItemOnCart } from "../CartContext";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.removeItemOnCart = removeItemOnCart.bind(this);
    this.calculatePriceTotalItem = this.calculatePriceTotalItem.bind(this);
    this.state = {
      cart: []
    }
  }

  componentWillMount() {
    this.setState({cart: this.context});
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
            {
              this.state.cart.map((item, index) => (
                <section key={index}>
                  <span>
                    <img src={item.product.picture} alt={item.product.short_description}/>
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
                    onClick={() => this.setState({cart: this.removeItemOnCart(this.state.cart, {id: item.product._id, size: item.size})})}
                  >
                    X
                  </span>
                </section>
              ))
            }
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
