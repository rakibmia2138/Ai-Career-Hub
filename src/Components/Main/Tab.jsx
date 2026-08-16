const Tab = ({ cartItems, activeTab, setActiveTab }) => {
  return (
    <div>
      <div className="text-center py-20 px-4 space-y-4">
        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed to <br></br> boost your productivity and creativity.
        </p>
        {/* name of each tab group should be unique */}
        <div className="tabs justify-center gap-5">
          <button
            className={`btn ${activeTab === "products" ? "btn-primary" : ""} rounded-full w-40`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button
            className={`btn ${activeTab === "cart" && "btn-primary"} rounded-full w-40`}
            onClick={() => setActiveTab("cart")}
          >{`Cart (${cartItems.length})`}</button>
        </div>
      </div>
    </div>
  );
};

export default Tab;
