import { FaCheckCircle } from "react-icons/fa";

const DeliverValue = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#0C1F48] w-full min-h-screen py-16 px-6 flex items-center justify-center flex-col">
        <div className="text-center max-w-3xl">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Deliver more value. Close more deals.
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            Creating website audits that business owners understand and value
            has always been a tedious, time-consuming process full of pain and
            frustration... Until Now! Leave the competition in the dust with
            audits that take you from "Yawn, another sales pitch" to "We want to
            work with you!"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-12 w-full max-w-6xl items-center">
          <div className="flex justify-center items-center">
            <img
              src="/dashboard.png"
              alt="Dashboard Preview"
              className="w-full max-w-lg object-contain shadow-lg rounded-lg"
            />
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Audit sites in minutes.",
                description:
                  "Stop wasting hours with multiple tools and bad-looking results. In just FIVE minutes, you can run an in-depth audit that produces beautiful reports measuring everything that matters.",
              },
              {
                title: "Provide incredible value.",
                description:
                  "Move beyond the 'just a website' conversation with 40 data points that analyze a client's online presence. Show them what they need to succeed—not just what they think they want.",
              },
              {
                title: "Close bigger deals faster.",
                description:
                  "Build trust by demonstrating how useful you can be, then leverage that trust into bigger projects that help your customers more. Stop selling 'just' websites—start selling answers to all their problems.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <FaCheckCircle className="text-white text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-white text-xl font-bold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300 text-md leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverValue;
