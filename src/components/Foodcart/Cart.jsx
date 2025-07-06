import React,{useState} from 'react'

const Cart = (props) => {
  const { cart, setCart } = props;

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const removeItem = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <div className="cart-wrapper">
      <h1 className="cart-heading">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty</p>
      ) : (
        <div className="cart-item">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">
                  Price: ${item.price.toFixed(2)}
                </p>
                <button
                  className="remove-button"
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total-section">
            <h3 className="cart-total-label">Total Price:</h3>
            <p className="cart-total-price">${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;