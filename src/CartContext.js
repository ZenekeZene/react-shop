import React from "react";

const CartContext = React.createContext();

const CartProvider = CartContext.Provider;
const CartConsumer = CartContext.Consumer;

function addItemOnCart(state, payload) {
  let isDuplicated = false;
  state.forEach(item => {
    if (item.product._id === payload.product._id && item.product.size != payload.product.size) {
      item.quantity += payload.quantity;
      isDuplicated = true;
    }
  });
  if (!isDuplicated) {
    state.push(payload);
  }
}

function removeItemOnCart(state, payload) {
	console.log(state);
	console.log(payload);
	state = state.filter(item => item.product._id != payload.id);
	console.log(state);
}

export {
  CartProvider,
  CartConsumer,
  CartContext,
  addItemOnCart,
  removeItemOnCart
};
