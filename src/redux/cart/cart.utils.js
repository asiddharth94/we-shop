// function to handle the scenario where we add an item , which is already present in the cart
// because we need to update the quantity for those items, and not add a new entry

export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // we need to return a new object for our state, so that component knows to re-render properly

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// handle onClick of 'X' in <CheckoutItem /> to completely clear the item from cart
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  // returns all other item except for cartItemToClear
  const remainingCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== cartItemToClear.id
  );

  return remainingCartItems;
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }
};
