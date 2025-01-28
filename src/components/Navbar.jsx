import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          <img
            src="mywebaudit 1.png"
            alt="logo"
            className="h-8 md:h-10 w-28 lg:w-36"
          />
        </div>

        <div className="hidden md:flex items-center space-x-6 text-md lg:text-lg">
          <div className="space-x-4 flex">
            <div className="cursor-pointer hover:text-gray-700">
              Success Stories
            </div>
            <div className="cursor-pointer hover:text-gray-700">
              Sample Reports
            </div>
            <div className="cursor-pointer hover:text-gray-700">Pricing</div>
            <div className="cursor-pointer hover:text-gray-700">Feature</div>
            <div className="cursor-pointer hover:text-gray-700">About</div>
            <div className="cursor-pointer hover:text-gray-700">Use Cases</div>
            <div className="cursor-pointer hover:text-gray-700">Blog</div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-[#82B440] rounded-lg text-white px-4 py-2 hover:bg-[#6fa130]">
              Free
            </button>
            <button className="border-[#82B440] border shadow-md rounded-lg text-[#82B440] px-4 py-2 hover:bg-gray-100">
              Login
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-black focus:outline-none text-2xl"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start space-y-4 p-4">
            <div className="cursor-pointer hover:text-gray-700">
              Success Stories
            </div>
            <div className="cursor-pointer hover:text-gray-700">
              Sample Reports
            </div>
            <div className="cursor-pointer hover:text-gray-700">Pricing</div>
            <div className="cursor-pointer hover:text-gray-700">Feature</div>
            <div className="cursor-pointer hover:text-gray-700">About</div>
            <div className="cursor-pointer hover:text-gray-700">Use Cases</div>
            <div className="cursor-pointer hover:text-gray-700">Blog</div>
            <div className="flex space-x-4 w-full">
              <button className="bg-[#82B440] rounded-lg text-white px-4 py-2 w-full">
                Free
              </button>
              <button className="border-[#82B440] border shadow-md rounded-lg text-[#82B440] px-4 py-2 w-full">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
