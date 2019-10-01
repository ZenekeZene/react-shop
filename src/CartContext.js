import React from 'react';

const CartContext = React.createContext();

const CartProvider = CartContext.Provider;
const CartConsumer = CartContext.Consumer;

function addItemOnCart(state, payload) {
  let isDuplicated = false;
  state.forEach((itemProp) => {
    const item = itemProp;
    if (
      item.product._id === payload.product._id
      && item.product.size !== payload.product.size
    ) {
      item.quantity += payload.quantity;
      isDuplicated = true;
    }
  });
  if (!isDuplicated) {
    state.push(payload);
  }
}

function removeItemOnCart(state, payload) {
  return state.filter(
    (item) => item.product._id !== payload.id && item.size !== payload.size,
  );
}

export {
  CartProvider,
  CartConsumer,
  CartContext,
  addItemOnCart,
  removeItemOnCart,
};
