import { use, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Stats from "./Components/Stats/Stats";
import Cart from "./Components/Cart/Cart";
import Tab from "./Components/Main/Tab";

const getProducts = async () => {
  const response = await fetch("./products.json");
  return response.json();
};

const promise = getProducts();

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const data = use(promise);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Tab count={count} activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
      {
        activeTab === "products" ? (
          <Main
            data={data}
            count={count}
            setCount={setCount}
            cartItems={cartItems}
            setCartItems={setCartItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></Main>
        ) : (
          <Cart count={count} cartItems={cartItems}></Cart>
        )
      }
      <Footer></Footer>
    </>
  );
}

export default App;
