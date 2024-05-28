import PropTypes from 'prop-types';
import './cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>card:{cart.length}</h3>
      <div className="cart-container">
        {cart.map(bottle => {
          return (
            <div key={bottle.id}>
              <img src={bottle.img}></img>
              <button onClick={() => handleRemoveFromCart(bottle.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
