import Card from "./Card";

const Main = ({ data, cartItems, setCartItems, total, setTotal }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {data.map((product) => (
          <Card
            key={product.id}
            product={product}
            total={total}
            setTotal={setTotal}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
