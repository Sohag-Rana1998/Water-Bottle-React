const getStoredCart = () => {
  const storedCardString = localStorage.getItem('cart');

  if (storedCardString) {
    return JSON.parse(storedCardString);
  }
  return [];
}


const savedCardToLS = cart => {
  const cartStrigified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStrigified);

}



const addToLS = id => {
  const cart = getStoredCart();
  const newCart = [...cart, id];
  savedCardToLS(newCart);
}

const removeFromLS = id => {
  const cart = getStoredCart();
  const remaining = cart.filter(idx => idx !== id);
  savedCardToLS(remaining);
}

export { addToLS, getStoredCart, removeFromLS }