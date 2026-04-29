
const Stats = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-30">
            <div className="flex justify-around container mx-auto px-4 py-15">
                <div>
                    <h1 className="text-white font-extrabold text-[30px] lg:text-[60px]">50K+</h1>
                    <p className="text-[#FFFFFF] lg:text-[24px] font-medium">Active Users</p>
                </div>
                <div className="divider divider-horizontal divider-start bg-[#FFFFFF] w-1 rounded-xl"></div>

                <div>
                    <h1 className="text-white font-extrabold text-[30px] lg:text-[60px]">200+</h1>
                    <p className="text-[#FFFFFF] lg:text-[24px] font-medium">Premium Tools</p>
                </div>
                <div className="divider divider-horizontal divider-start bg-[#FFFFFF] w-1 rounded-xl"></div>

                <div>
                    <h1 className="text-white font-extrabold text-[30px] lg:text-[60px]">4.9</h1>
                    <p className="text-[#FFFFFF] lg:text-[24px] font-medium">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;