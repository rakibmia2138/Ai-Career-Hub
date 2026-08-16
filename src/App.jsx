import { use, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Stats from "./Components/Stats/Stats";
import Cart from "./Components/Cart/Cart";
import Tab from "./Components/Main/Tab";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Steps/Pricing";
import CTA from "./Components/Steps/CTA";

const getProducts = async () => {
  const response = await fetch("./products.json");
  return response.json();
};

const promise = getProducts();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [total, setTotal] = useState(0);
  const data = use(promise);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Tab
        cartItems={cartItems}
        setActiveTab={setActiveTab}
      ></Tab>
      {activeTab === "products" ? (
        <Main
          data={data}
          total={total}
          setTotal={setTotal}
          cartItems={cartItems}
          setCartItems={setCartItems}
        ></Main>
      ) : (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          total={total}
          setTotal={setTotal}
        ></Cart>
      )}
      <Steps></Steps>
      <Pricing></Pricing>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}

export default App;
