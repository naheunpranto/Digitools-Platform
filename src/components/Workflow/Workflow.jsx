

const Workflow = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            <div className="px-6 py-16 md:px-20 lg:px-50 lg:py-40 text-center">
                <h1 className="text-3xl md:text-[40px] font-extrabold mb-4">Ready to Transform Your Workflow?</h1>
                <p className="text-[16px] text-[#FFFFFF] mb-10">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                    <button className="btn rounded-3xl text-[16px] text-[#9514FA] p-5">Explore Products</button>
                    <button className="btn rounded-3xl text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] border border-white text-white p-5">View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;