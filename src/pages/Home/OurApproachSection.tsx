import { useState } from "react";

const approachItems = [
  {
    title: "Direct Outreach",
    description:
      "Connecting with individuals where they are, offering immediate support.",
  },
  {
    title: "Holistic Care",
    description:
      "Addressing housing, mental health, addiction recovery, and job assistance together.",
  },
  {
    title: "Data-Driven Strategy",
    description:
      "Using research and technology to guide effective intervention.",
  },
  {
    title: "Community Collaboration",
    description:
      "Partnering with local organizations to create a wraparound support network.",
  },
];

export default function OurApproachSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="relative bg-bg-secondary overflow-hidden">
      {/* Boston Map Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/boston_map.svg"
          alt="Boston map"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto opacity-20"
        />
      </div>

      <div className="relative py-10 md:py-20 lg:py-20">
        <div className="max-w-8xl mx-auto px-4 md:px-20 lg:px-30">
          {/* Section Title */}
          <h2 className="text-text-secondary text-body-base font-semibold tracking-wider mb-10">
            OUR APPROACH
          </h2>
        </div>

        {/* Mobile: Vertical List with Descriptions */}
        <div className="lg:hidden space-y-8">
          {approachItems.map((item, index) => (
            <div key={index}>
              <div className="space-y-4 px-4 md:px-20 lg:px-30 max-w-8xl mx-auto">
                <h3 className="text-white text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-text-primary text-body-base leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Decorative dashed line - full width */}
              {index < approachItems.length - 1 && (
                <div className="py-6 md:py-10 w-screen">
                  <img
                    src="/squiggly_1.svg"
                    className="block md:hidden w-full mt-8"
                  />
                  <img
                    src="/squiggly_2.svg"
                    className="hidden md:block w-full mt-8"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Two Column Interactive Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-10 lg:gap-20 px-4 md:px-20 lg:px-30 max-w-8xl mx-auto">
          {/* Left Column - List of items */}
          <div className="space-y-0">
            {approachItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-full text-left py-4 border-l-4 pl-6 transition-all ${
                  selectedIndex === index
                    ? "border-white text-white"
                    : "border-transparent text-text-quaternary"
                }`}
              >
                <h3 className="text-heading md:text-subtitle font-semibold">
                  {item.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Column - Description */}
          <div className="flex items-center p-10 rounded-xl relative">
            {/* Custom SVG dashed border */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ borderRadius: "0.75rem" }}
            >
              <rect
                x="2"
                y="2"
                width="calc(100% - 4px)"
                height="calc(100% - 4px)"
                rx="12"
                fill="none"
                stroke="#0a2572"
                strokeWidth="4"
                strokeDasharray="15 10"
              />
            </svg>
            <p className="text-white text-lg md:text-subtitle leading-relaxed relative z-10">
              {approachItems[selectedIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
