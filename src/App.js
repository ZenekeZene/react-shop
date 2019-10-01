import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ShopSingle from "./pages/ShopSingle";
import Header from "./components/Header";
import "./styles/global.scss";
import { CartProvider } from "./CartContext";

function App() {
    return (
      <CartProvider value={[]}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/shop-single/:id" component={ShopSingle} />
        </Switch>
      </CartProvider>
    );
}

export default App;
