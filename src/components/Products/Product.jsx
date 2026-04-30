import { useState } from "react";

const Product = ({ product, carts, setCarts }) => {

    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const handleAddedToCart = () => {
        setIsAddedToCart(true)
        setCarts([...carts, product])
    }

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="text-right">
            {/* <span className="badge badge-xs badge-warning ">{}</span> */}
            <span className={`badge badge-xs ${product.tag === "popular" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : product.tag === "new" ? "bg-[#0A883E] text-white" :  "badge-warning"} p-3 rounded-2xl`}>{product.tag}</span>
        </div>
        <img className="w-15" src={product.icon} alt="" />
        <div className="text-left space-y-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-[16px] text-[#627382] ">{product.description}</p>
            <h1 className="text-2xl font-bold ">${product.price}/{product.period}</h1>
            <div>
                {
                    product.features.map(feature => (
                        <ul>
                            <li className="text-[16px] font-medium text-[#627382]"><span className="mr-2 text-green-500">✔</span>{feature}</li>
                        </ul>
                    ))
                }  
            </div>
        </div>
        <button onClick={handleAddedToCart} className={`btn  rounded-3xl mt-4 text-white ${isAddedToCart ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>{isAddedToCart ? "Added To Cart" : "Buy Now"}</button>
      </div>
    </div>
  );
};

export default Product;
