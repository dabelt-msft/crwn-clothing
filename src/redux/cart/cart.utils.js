export const addItemToCart = (cartItems, cartItemToAdd) => {
  console.log(typeof cartItems, " -- type");
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// Change code to enable remove
// export const removeItemfromCart = (cartItems, cartItemToAdd) => {
// const existingCartItem = cartItems.find(
//         (cartItem) => cartItem.id === cartItemToAdd.id
//     );

//     if (existingCartItem){
//         return cartItems.map(cartItem => cartItem.id === existingCartItem.id ? {...cartItem, quantity: cartItem.quantity + 1})
//     }
// };
