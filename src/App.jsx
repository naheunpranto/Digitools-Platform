
import { act, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Choose from './components/Choose/Choose'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Products from './components/Products/Products'
import Stats from './components/Stats/Stats'
import Workflow from './components/Workflow/Workflow'

const productsData = async () => {
  const res = await fetch("/productData.json")
  return res.json();
}

const productsPromise = productsData();

function App() {

  const [activeTab, setActiveTab] = useState("products")

  const [carts, setCarts] = useState([])  

  return (
    < >
      <Navbar />

      <Banner/>

      <Stats/>

      <Products productsPromise = {productsPromise} activeTab = {activeTab} setActiveTab = {setActiveTab} carts = {carts} setCarts = {setCarts}/>

      <Cart activeTab = {activeTab} carts = {carts}/>

      <Choose/>

      <Pricing/>

      <Workflow/>

      <Footer />
    </>
  )
}

export default App
