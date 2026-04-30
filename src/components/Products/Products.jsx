import { use } from "react";
import Product from "./Product";

const Products = ({ productsPromise, activeTab, setActiveTab, carts, setCarts }) => {
  const products = use(productsPromise);

  

  return (
    <div className="text-center space-y-4">
      <h1 className="text-[48px] font-extrabold">Premium Digital Tools</h1>
      <p className="text-4 text-[#627382]">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mb-10">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Products"
          onClick={() => setActiveTab("products")}
          defaultChecked
        />

        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "products" && <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4">
        {
            products.map(product => {return <Product product = {product} carts = {carts} setCarts = {setCarts}/>})
        }
      </div>}
    </div>
  );
};

export default Products;
