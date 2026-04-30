import { toast } from "react-toastify";


const Cart = ({activeTab, carts, setCarts}) => {

    if(activeTab !== "cart") return null;

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([])
        toast.success("Payment successful!")
    }

    const handleRemove = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.success("Item Remove")
    }

    return (
        <div className="container mx-auto border border-gray-200 rounded-lg p-10">
            
                <h1 className="text-2xl font-bold">Your Cart</h1>

                {
                    carts.length === 0 ? <p className="text-center text-2xl font-semibold p-5">Cart is empty</p> :
                    <>
                        <div className="space-y-5 mt-4">
                    {
                        carts.map(item => <div key={item.id} className="flex items-center justify-between rounded-lg p-3 bg-[#F9FAFC]">
                            <div className="flex items-center gap-5">
                                <div>
                                    <img className="w-15 object-contain" src={item.icon} alt="" />
                                </div>

                                <div>
                                    <h2 className="text-[20px] font-semibold">{item.name}</h2>
                                    <span className="font-medium text-[#627382]">${item.price}</span>
                                </div>
                            </div>

                            <div>
                                <span onClick={() => handleRemove(item)} className="text-red-500 font-bold cursor-pointer">Remove</span>
                            </div>
                        </div>)
                    }
                        </div>

                        <div className="flex justify-between items-center mt-6 px-5">
                            <div>Total</div>
                            <div className="text-2xl font-bold">${totalPrice}</div>
                        </div>

                        <button onClick={handlePayment} className="btn w-full mt-5 rounded-3xl p-6 text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">Proceed To Checkout</button>
                    </>
                }
        </div>
    );
};

export default Cart;