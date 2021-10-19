export const addItemToCart = (cartItems, addItem) => {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === addItem.id) {
      cartItems[i]={...cartItems[i],quantity:cartItems[i].quantity+1}
      return [...cartItems];
    }
  }
  cartItems.push({ ...addItem, quantity: 1 });
  return [...cartItems];
};

export const removeItemFromCart = (cartItems, Item) => {
  if (Item.quantity > 1) {
    Item={...Item,quantity:Item.quantity-1};
    return [...cartItems];
  }
  cartItems = cartItems.filter((item) => item.id !== Item.id);
  return cartItems;
};
