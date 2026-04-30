
import './App.css'
import Banner from './components/Banner/Banner'
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

  return (
    < >
      <Navbar />

      <Banner/>

      <Stats/>

      <Products productsPromise = {productsPromise}/>

      <Choose/>

      <Pricing/>

      <Workflow/>

      <Footer />
    </>
  )
}

export default App
