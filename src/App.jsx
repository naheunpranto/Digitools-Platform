
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Stats from './components/Stats/Stats'

const productsData = async () => {
  const res = await fetch("/productData.json")
  return res.json();
}

const productsPromise = productsData();

function App() {

  return (
    < >
      <Navbar />

      <Banner/>

      <Stats/>

      <Products productsPromise = {productsPromise}/>
    </>
  )
}

export default App
