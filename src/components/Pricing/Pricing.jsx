const Pricing = () => {
  return (
    <div className="mt-30 container mx-auto mb-30">
      <div className="text-center space-y-4">
        <h1 className="text-[48px] font-extrabold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-4 text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>


      
      <div className="flex flex-col lg:flex-row gap-7.5 justify-center mt-10 items-center lg:items-stretch">
            <div className="card w-96 bg-base-100 shadow-sm ">
            <div className="card-body bg-[#F9FAFC] rounded-xl flex flex-col h-full">
                <div className="text-left space-y-4 grow">
                <h1 className="text-[24px] font-bold">Starter</h1>
                <p className="text-[16px] text-[#627382] ">
                    Perfect for getting started
                </p>
                <h1 className="text-[40px] font-bold ">
                    $0<span className="text-[20px] text-[#627382]">/Month</span>
                </h1>
                <ul >
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>Access to 10
                    free tools
                    </li>
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>Basic templates
                    </li>
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>Community
                    support
                    </li>
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>1 project per
                    month
                    </li>
                </ul>
                </div>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl mt-4 text-white">
                Get Started Free
                </button>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-sm ">
            <div className="card-body bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-xl flex flex-col h-full">
                <div className="text-left space-y-4 grow">
                <h1 className="text-[24px] font-bold text-white">Pro</h1>
                <p className="text-[16px] text-white ">
                    Best for professionals
                </p>
                <h1 className="text-[40px] font-bold text-white">
                    $29<span className="text-[20px] text-white">/Month</span>
                </h1>
                <ul >
                    <li className="text-[16px] text-white font-medium">
                    <span className="mr-2 text-green-500">✔</span>Access to all premium tools
                    </li>
                    <li className="text-[16px] text-white font-medium">
                    <span className="mr-2 text-green-500">✔</span>Unlimited templates
                    </li>
                    <li className="text-[16px] text-white font-medium">
                    <span className="mr-2 text-green-500">✔</span>Priority support
                    </li>
                    <li className="text-[16px] text-white font-medium">
                    <span className="mr-2 text-green-500">✔</span>Unlimited projects
                    </li>
                    <li className="text-[16px] text-white font-medium">
                    <span className="mr-2 text-green-500">✔</span>Cloud sync
                    </li>
                    <li className="text-[16px] text-white font-medium">
                    <span className="mr-2 text-green-500">✔</span>Advanced analytics
                    </li>
                </ul>
                </div>
                <button className="btn bg-white rounded-3xl text-[#9514FA]">
                Get Started Free
                </button>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-sm ">
            <div className="card-body bg-[#F9FAFC] flex flex-col h-full">
                <div className="text-left space-y-4 grow">
                <h1 className="text-[24px] font-bold">Enterprise</h1>
                <p className="text-[16px] text-[#627382] ">
                    For teams and businesses
                </p>
                <h1 className="text-[40px] font-bold ">
                    $99<span className="text-[20px] text-[#627382]">/Month</span>
                </h1>
                <ul >
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>Everything in Pro
                    </li>
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>Team collaboration
                    </li>
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>Custom integrations
                    </li>
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>Dedicated support
                    </li>
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>SLA guarantee
                    </li>
                    <li className="text-[16px] text-[#627382] font-medium">
                    <span className="mr-2 text-green-500">✔</span>Custom branding
                    </li>
                </ul>
                </div>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl mt-4 text-white">
                Contact Sales
                </button>
            </div>
            </div>
      </div>
      
    </div>
  );
};

export default Pricing;
