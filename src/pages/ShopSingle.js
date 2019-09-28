import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import ClothingSizes from "../components/ClothingSizes";
import { getProductByIdFromCloud } from "../api";

class ShopSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null,
      isLoading: true,
      quantity: 0,
      size: "medium"
    };
  }

  componentDidMount() {
    this.setState({ productInfo: this.props.location.data });
    if (!this.state.infoProduct) {
      getProductByIdFromCloud({ id: this.props.match.params.id })
        .then(response => {
          this.setState({ productInfo: response.product, isLoading: false });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  handleChange(e) {
    this.setState({ quantity: e.target.value });
  }

  handAddToCart() {
    if (this.state.quantity > 0) {
      const quantity = this.state.quantity;
      this.setState({ quantity: 0 });
      console.log("Añadimos el producto.");
      /* this.addItemOnCart({
				product: this.productInfo,
				quantity,
				size: this.size[0]
			});
		*/
    }
  }

  render() {
    return (
      <article>
        {!this.state.isLoading && (
          <ProductItem
            productInfo={this.state.productInfo}
            isMini={false}
            productActions={
              <>
                <input
                  type="number"
                  min="0"
                  value={this.state.quantity}
                  onChange={e => this.setState({ quantity: e.target.value })}
                />
                <ClothingSizes
                  typeInput="radio"
				  defaultSize={this.state.defaultSize}
                  onChange={size => this.setState({ size })}
                ></ClothingSizes>
                <button className="button">
                  <Link to="/">Continue shopping</Link>
                </button>
                <button
                  className="button"
                  onClick={this.handAddToCart.bind(this)}
                >
                  Add to cart
                </button>
                <button className="button">
                  <Link to="/cart">Go to checkout</Link>
                </button>
              </>
            }
          ></ProductItem>
        )}
        <Link to="/">Volver</Link>
      </article>
    );
  }
}

export default ShopSingle;
