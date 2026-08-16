import shoppingCart from "../../assets/products/shopping-cart.png";
// import shoppingCart from "../../assets/products/shopping-cart.png";

const Navbar = ({cartItems}) => {
  return (
    <div className="navbar max-w-11/12 mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h2 className="text-blue-500">DigiTools</h2>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="relative cursor-pointer">
          <img
            className="w-7 h-7 dark:invert"
            src={shoppingCart}
            alt="Shopping Cart"
          />

          {cartItems.length > 0 && (
            <span
              className="absolute -top-3 -right-3 
              bg-red-500 text-white text-xs font-bold 
              w-5 h-5 rounded-full flex items-center justify-center"
            >
              {cartItems.length}
            </span>
          )}
        </div>
        <p>Login</p>
        <a className="btn bg-blue-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
