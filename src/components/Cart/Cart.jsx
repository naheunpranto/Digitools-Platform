

const Cart = ({activeTab, carts}) => {

    if(activeTab !== "cart") return null;

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="container mx-auto">
            <div className=" border border-gray-200 rounded-lg p-10">
            <h1 className="text-2xl font-bold">Your Cart</h1>

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

                        </div>
                    </div>)
                }
            </div>
            </div>

            <div className="flex justify-between items-center mt-6">
                <div>Total</div>
                <div className="text-2xl font-bold">0</div>
            </div>
        </div>
    );
};

export default Cart;