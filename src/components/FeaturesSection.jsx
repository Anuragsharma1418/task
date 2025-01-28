import {
  FaChartBar,
  FaDollarSign,
  FaMagnet,
  FaLaptop,
  FaBullseye,
  FaSearch,
  FaBell,
  FaProjectDiagram,
} from "react-icons/fa";
import { PiPresentationChart } from "react-icons/pi";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaChartBar className="text-blue-600 text-3xl" />,
      title: "Beautiful and actionable",
      description:
        "Build no-fluff audit reports in minutes with lots of beautiful layout options. Designed to impress—while still being functional and intuitive.",
    },
    {
      icon: <FaDollarSign className="text-blue-600 text-3xl" />,
      title: "Measure what matters",
      description:
        "Businesses care about revenue and ROI. We evaluate dozens of points and present them in terms anyone can understand.",
    },
    {
      icon: <FaMagnet className="text-blue-600 text-3xl" />,
      title: "Doubles as a lead magnet",
      description:
        "Embed a free audit tool on your site. This high-value tool gets 4 times more leads than a general PDF lead magnet.",
    },
    {
      icon: <FaLaptop className="text-blue-600 text-3xl" />,
      title: "Crafted to convert",
      description:
        "Audit recommendations appear in easy-to-understand terms that are perfect for connecting with leads, delivering value and smoothing the sales process.",
    },
    {
      icon: <FaBullseye className="text-blue-600 text-3xl" />,
      title: "Personalized for you",
      description:
        "From email messages to CTAs, from logos to countdown timers—we've thought of it all. Just a few clicks and MWA is truly yours.",
    },
    {
      icon: <FaSearch className="text-blue-600 text-3xl" />,
      title: "Reviews sites in a snap",
      description:
        "Our easy-to-use browser extension helps you audit a site and its competitors—using both manual and automatic checks—in less than 5 minutes.",
    },
    {
      icon: <PiPresentationChart className="text-blue-600 text-3xl" />,
      title: "Ready for your sales process",
      description:
        "MWA includes testtimonials to build trust, countdown timers to motivate leads and tested CTAs to inspire them to buy.",
    },
    {
      icon: <FaBell className="text-blue-600 text-3xl" />,
      title: "Monitors client activity",
      description:
        "Get notifications and alerts when sales emails are opened and audits are read—and follow up faster with hot leads.",
    },
    {
      icon: <FaProjectDiagram className="text-blue-600 text-3xl" />,
      title: "Zapier integration & workflows",
      description:
        "Connect the apps you use in your lead generation and sales process with My Web Audit so you can automate your workflows.",
    },
  ];

  return (
    <div className="flex justify-center items-center py-16 px-6 bg-white">
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-blue-900 text-3xl md:text-4xl font-bold mb-4">
          How is My Web Audit different?
        </h2>
        <p className="text-center text-gray-600 text-lg mb-10">
          We help you close more deals. Here are just a few reasons why we're
          different.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col items-start"
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-blue-900 text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
