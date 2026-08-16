const Tab = ({ cartItems, setActiveTab }) => {
  return (
    <div>
      <div className="text-center py-20 px-4 space-y-4">
        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed to <br></br> boost your productivity and creativity.
        </p>
        {/* name of each tab group should be unique */}
        <div className="tabs justify-center tabs-box bg-none border-none">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab("products")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label={`Cart (${cartItems.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </div>
      </div>
    </div>
  );
};

export default Tab;
