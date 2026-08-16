import { toast } from "react-toastify";
const Cart = ({ cartItems, setCartItems, total, setTotal }) => {
  console.log(total);
  const handlePayment = () => {
    setCartItems([]);
    setTotal(0);
    toast.success("Payment Successful!");
  };
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setTotal(total - cartItems.find((item) => item.id === id).price);
    toast.success("Item removed from cart!");
  };
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl font-semibold text-center p-5">Cart is Empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border p-4 
          rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 
          mt-4"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p>${item.price}/months</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-error rounded-full"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div
            className="flex justify-between items-center p-5 rounded-lg 
      mt-6 bg-black text-white text-2xl"
          >
            <div>Total:</div>
            <div>${total}</div>
          </div>
          <button
            onClick={handlePayment}
            className="btn w-full hover:bg-red-400 
        hover:cursor-pointer transition-colors duration-300 p-5 rounded-lg 
      mt-6 bg-red-500 text-white text-xl font-bold"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
