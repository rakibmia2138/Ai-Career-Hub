import { use } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'

const getProducts = async () => {
    const response = await fetch('./products.json');
    return response.json();
}

const promise = getProducts();

function App() {
  const data = use(promise);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Main data={data}></Main>
      <Footer></Footer>
    </>
  )
}

export default App
