import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ShopSingle from "./pages/ShopSingle";
import Header from "./components/Header";
import "./styles/global.css";
import "./App.css";
import { CartProvider } from "./CartContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  render() {
    return (
      <CartProvider value={this.state.cart}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/shop-single/:id" component={ShopSingle} />
        </Switch>
      </CartProvider>
    );
  }
}

export default App;
