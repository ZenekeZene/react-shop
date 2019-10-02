import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ShopSingle from './pages/ShopSingle';
import Header from './components/Header';
import 'react-notifications-component/dist/scss/notification.scss';
import './styles/global.scss';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider value={[]}>
      <Header />
      <ReactNotification />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/shop-single/:id" component={ShopSingle} />
      </Switch>
    </CartProvider>
  );
}

export default App;
