import React from 'react';

const Cart = ({ count, cartItems }) => {
    console.log(cartItems,"CArt Items");
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items in cart: {count}</p>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;