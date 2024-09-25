import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="container mt-4">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart yet. Add products to your cart from the Products page.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
