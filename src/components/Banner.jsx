const Banner = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="bg-[#0C1F48] w-full min-h-screen md:h-[600px] flex items-center justify-center px-4 md:px-6 pt-20 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[85%] lg:w-[75%] w-full">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-white text-2xl md:text-4xl font-bold leading-snug">
                Audits that help your agency close more deals.
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Build trust faster and close more—and bigger—deals with beautiful, actionable, and easy-to-understand website audits.
              </p>
  
              <div className="flex flex-col space-y-4 md:space-y-0">
                <div className="relative w-full md:w-[300px]">
                  <input
                    type="text"
                    className="border bg-white py-2 px-4 pr-28 rounded-md text-base w-full"
                    placeholder="Enter your email"
                  />
                  <button className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-[#82B440] text-white px-3 py-[10px] rounded-md text-sm hover:bg-[#6fa130]">
                    TRY FOR FREE
                  </button>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-white underline text-base md:text-lg hover:text-gray-300"
                  >
                    OR VIEW SUCCESS STORIES
                  </a>
                </div>
              </div>
  
              <p className="text-gray-300 text-xs md:text-sm mt-4">
                Runs on ALL popular website platforms, from WordPress and Wix to Shopify and Magento.
              </p>
            </div>
  
            <div className="flex justify-center items-center">
              <img
                src="person.png"
                alt="Person"
                className="w-[80%] md:w-full max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
  
  