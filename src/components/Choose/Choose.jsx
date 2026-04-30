const Choose = () => {
  return (
    <div className="mt-30 bg-[#F9FAFC]">
      <div className="container mx-auto p-30">
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-[48px] font-extrabold">Get Started In 3 Steps</h1>
          <p className="text-[16px] text-[#627382]">Start using premium digital tools in minutes, not hours</p>
        </div>

        {/* 3 Card section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-7.5">
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="absolute top-4 right-4">
                <span className="flex items-center justify-center w-8 h-8 text-right text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">01</span>
            </div>
            <figure className="px-10 pt-10">
              <img
                src="/user.png"
                alt="user"
                className="rounded-full bg-[#dab1f9] p-5"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Create Account</h2>
              <p className="text-[16px] text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="absolute top-4 right-4">
                <span className="flex items-center justify-center w-8 h-8 text-right text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">02</span>
            </div>
            <figure className="px-10 pt-10">
              <img
                src="/package.png"
                alt="user"
                className="rounded-full bg-[#dab1f9] p-5"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Choose Products</h2>
              <p className="text-[16px] text-[#627382]">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="absolute top-4 right-4">
                <span className="flex items-center justify-center w-8 h-8 text-right text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">03</span>
            </div>
            <figure className="px-10 pt-10">
              <img
                src="/rocket.png"
                alt="user"
                className="rounded-full bg-[#dab1f9] p-5"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold">Start Creating</h2>
              <p className="text-[16px] text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
