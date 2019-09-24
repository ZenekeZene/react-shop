import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { getProductByIdFromCloud } from "../api";

class ShopSingle extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, isLoading: true, };
  }

  componentDidMount() {
    this.setState({ data: this.props.location.data });
    if (!this.state.data) {
      getProductByIdFromCloud({ id: this.props.match.params.id })
        .then(response => {
          this.setState({ data: response.product, isLoading: false });
        })
        .catch(error => {
          console.error(error);
        })
    }
  }

  render() {
    return (
      <article>
        {!this.state.isLoading && <ProductItem productInfo={this.state.data}></ProductItem>}
        <Link to="/">Volver</Link>
      </article>
    );
  }
}

export default ShopSingle;
