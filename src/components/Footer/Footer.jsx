import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="pb-10 px-4 md:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between text-white container mx-auto pt-30 pb-7.5">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-bold">DigiTools</h1>
            <p className="text-[#FFFFFF] opacity-80">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:gap-20 gap-10 text-center lg:text-left">
            <div>
              <ul className="space-y-4">
                <li className="text-xl font-bold">Product</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="text-xl font-bold">Company</li>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="text-xl font-bold">Resources</li>
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <h1 className="text-xl font-bold">Social Links</h1>
            <div className="flex gap-5">
              <FaInstagramSquare className="p-1 rounded-full w-10 h-10" />
              <FaFacebook className="p-1 rounded-full w-10 h-10" />
              <FaSquareXTwitter className="p-1 rounded-full w-10 h-10" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0">
          <div className="divider bg-gray-50 h-px my-6"></div>
          <div className="text-white flex flex-col-reverse lg:flex-row justify-between items-center gap-5 lg:gap-0 opacity-70 text-sm">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
              <h1>Privacy Policy</h1>
              <h1>Terms of Service </h1>
              <h1>Cookies</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
