import React from "react";
import { toast } from "react-toastify";

const Card = ({ product, cartItems, setCartItems, total, setTotal }) => {
  return (
    <div className="card max-w-11/12 mx-auto bg-base-100 shadow-sm">
      <div className="card-body flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <img
            src={product.icon}
            alt={product.name}
            className="w-10 h-10 object-contain"
          />

          <div>
            <span className="badge badge-xs badge-warning">{product.tag}</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <h3 className="text-2xl font-bold">${product.price}/mo</h3>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {product.features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <button
            onClick={() => {
              const alreadyExists = cartItems.some(
                (item) => item.id === product.id,
              );

              if (alreadyExists) {
                toast.warning("This product is already in your cart!");
                return;
              }
              setCartItems([...cartItems, product]);
              setTotal(total + product.price);
            }}
            className="btn btn-primary btn-block rounded-full text-xl"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
