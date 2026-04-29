import BannerImage from "../../assets/banner.png"


const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto mt-10 lg:mt-[85px] gap-10 lg:gap-[60px] mb-20 px-4 lg:px-0">
            {/* Left side section */}
            <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex gap-2 bg-[#e1e7ffFF] w-[320px] rounded-3xl p-3">
                    <img className="w-5" src="/public/circle.png" alt="" />
                    <h2 className="text-[16px] font-semibold text-[#4F39F6]">New: AI-Powered Tools Available</h2>    
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[72px] font-extrabold">Supercharge Your<br />Digital Workflow</h1>
                <p className="text-[18px] text-[#627382]">Access premium AI tools, design assets, templates, and productivity <br className="hidden lg:block" /> software—all in one place. Start creating faster today. <br className="hidden lg:block" /> Explore Products</p>

                <div className="flex gap-4">
                    <button className="btn rounded-4xl bg-[#4F39F6] text-white font-bold text-[16px] p-8">Explore Products</button>
                    <button className="btn rounded-4xl text-[#4F39F6] border-[#4F39F6] bg-white p-8"><img src="/public/Play.png" alt="" />Watch Demo</button>
                </div>
            </div>


            {/* Right side section */}
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;