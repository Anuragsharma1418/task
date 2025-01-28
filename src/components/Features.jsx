import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Feature = () => {
  return (
    <div className="flex flex-col items-center py-8 px-4">
      <div className="py-5 w-full md:w-[70%] lg:w-[50%] text-center">
        <p className="text-[#1F2278] text-2xl md:text-3xl lg:text-4xl font-semibold">
          Featured and trusted by some of the world's fastest-growing companies
          that serve agencies
        </p>
      </div>

      <div className="relative flex items-center w-full md:w-[100%] lg:w-[80%] overflow-x-auto space-x-6">
        <div className="flex justify-center items-center">
          <MdArrowBackIosNew className="bg-gray-100 border border-gray-200 p-2 text-gray-700 rounded-lg h-10 w-10 cursor-pointer hover:bg-gray-200" />
        </div>

        <div className="flex items-center space-x-6">
          <img
            src="liquidweb.png"
            alt="liquidweb"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
          <img
            src="upcity.png"
            alt="upcity"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
          <img
            src="ugurus.png"
            alt="ugurus"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
          <img
            src="wpengin.png"
            alt="wpengin"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          />
        </div>

        <div className="flex justify-center items-center">
          <MdArrowForwardIos className="bg-gray-100 border border-gray-200 p-2 text-gray-700 rounded-lg h-10 w-10 cursor-pointer hover:bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Feature;

