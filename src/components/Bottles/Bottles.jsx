import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import '../Bottle/Bottle.css';
// import {
//   addToLS,
//   getStoredCart,
//   removeFromLS,
// } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const storedCard = JSON.parse(localStorage.getItem('cart') || '[]');

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState(storedCard);

  useEffect(() => {
    fetch('Bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //    >>>>>>>>>>>>By Jhanker mahbub>>>>
  // useEffect(() => {
  //   if (bottles) {
  //     const storedCard = getStoredCart();
  //     console.log(storedCard);
  //     let saveCart = [];

  //     for (const id of storedCard) {
  //       const bottle = bottles.find(bottle => bottle.id === id);

  //       if (bottle) {
  //         saveCart.push(bottle);
  //       }
  //     }
  //     console.log(saveCart);
  //     setCart(saveCart);
  //   }
  // }, [bottles]);

  const handleAddToCart = bottle => {
    console.log(bottle);
    const newCard = [...cart, bottle];
    setCart(newCard);
  };

  const handleRemoveFromCart = id => {
    const remainingCard = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCard);
  };

  return (
    <div>
      <h3>Bottles Here:{bottles.length}</h3>
      <Cart
        key={cart.id}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      ></Cart>
      <div className="bottles">
        {bottles.map(bottle => {
          return (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            ></Bottle>
          );
        })}
      </div>
    </div>
  );
};

export default Bottles;
