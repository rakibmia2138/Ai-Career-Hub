import React from "react";
import Card from "./Card";

const Main = ({data}) => {
  console.log(data);
  return (
    <div>
      <div className="text-center py-20 px-4 space-y-4">
        <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed to <br></br> boost your productivity and creativity.
        </p>
        <div className="tabs tabs- w-full text-center justify-center gap-4">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab tab-active bg-blue-500 text-white px-8 rounded-full 
            font-semibold text-lg flex 
            items-center gap-3 group"
            aria-label="Products"
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab bg-white px-8 rounded-full font-semibold 
            text-lg flex items-center gap-3 
            group text-zinc-800"
            aria-label="Cart(0)"
            defaultChecked
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Main;
