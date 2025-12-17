import React from "react";
import { useState } from "react";

// HistoryPanel component
interface HistoryPanelProps {
  startYear: string;
  title: string;
  description: string;
  image?: string;
  imagePosition?: "left" | "right";
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({
  startYear,
  title,
  description,
  image,
  imagePosition = "right",
}) => (
  <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
    {/* Text content */}
    <div
      className={`w-full lg:w-1/2 flex flex-col items-start gap-6 ${
        imagePosition === "left" ? "lg:order-2" : "lg:order-1"
      }`}
    >
      {/* Eyebrow years */}
      <p className="text-white text-sm font-semibold uppercase tracking-wider">
        {startYear}
      </p>

      {/* Title */}
      <h1 className="text-white text-4xl font-bold text-left">{title}</h1>

      {/* Description */}
      <div className="relative">
        <h2 className="text-white text-lg text-left relative z-10">
          {description}
        </h2>
      </div>
    </div>

    {/* Image - full width on mobile, half on desktop */}
    {image && (
      <div
        className={`w-full lg:w-1/2 flex flex-col items-start gap-4 ${
          imagePosition === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-[10px] shrink-0"
        />
      </div>
    )}
  </div>
);

// FAQ Item
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left gap-4 bg-transparent"
      >
        <div className="flex-1">
          <h3 className="text-white text-xl font-semibold text-left">
            {question}
          </h3>
        </div>
        <div className="text-white text-2xl font-light">
          {isOpen ? "−" : "+"}
        </div>
      </button>
      {isOpen && (
        <div className="mt-4 text-white text-lg text-left ">{answer}</div>
      )}
    </div>
  );
};

const faqData = [
  {
    question: "What do project teams do?",
    answer:
      "The Rehumanization Project is a nonprofit organization dedicated to providing housing support, food assistance, mental health services, and employment resources to individuals experiencing homelessness and economic hardship. Our mission is to create long-term, " +
      "sustainable solutions that restore dignity and stability.",
  },
];

const historyData: HistoryPanelProps[] = [
  {
    startYear: "Feb. 2025",
    title: "Foundation",
    description:
      "The Rehumanization Project was founded on the belief that homelessness is not an identity, but a temporary crisis that can be overcome with the right support. What began as a grassroots effort between our founder and community partners to provide direct outreach and emergency aid has evolved into a comprehensive support network grounded in the wraparound care model—a proven approach that stabilizes individuals by addressing housing, mental health, addiction recovery, and employment support together.",
    image: "/Foundation.png",
    imagePosition: "right" as const,
  },
  {
    startYear: "Feb. 2025",
    title: "First Grant Received",
    description:
      "With our first grant secured, The Rehumanization Project validated its mission and expanded our capacity to serve. This funding enabled us to move beyond emergency assistance and build the infrastructure for sustainable, long-term partnerships—turning our grassroots vision into a scalable model that connects people with essential services and pathways to stability.",
    image: "/Grant.png",
    imagePosition: "left" as const,
  },
  {
    startYear: "Feb. 2025",
    title: "Expanding Community Partnership",
    description:
      "The Rehumanization Project was founded on the belief that homelessness is not an identity, but a temporary crisis that can be overcome with the right support. What began as a grassroots effort between our founder and community partners to provide direct outreach and emergency aid has evolved into a comprehensive support network grounded in the wraparound care model—a proven approach that stabilizes individuals by addressing housing, mental health, addiction recovery, and employment support together.",
    image: "/Expand.png",
    imagePosition: "right" as const,
  },
];

const AboutUs = () => {
  return (
    <div
      className="w-screen min-h-screen bg-[#060A1F] overflow-x-hidden"
      style={{ fontFamily: "Figtree" }}
    >
      <div className="grid grid-rows-[auto_auto_auto_auto] gap-4">
        {/* Panel 1: Our Impact Hero */}
        <div
          className="flex flex-col justify-end items-start gap-2.5 py-[72px] px-6 md:px-[120px] h-[519px] shrink-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Public/AboutUsHeader.png')" }}
        >
          <h2 className="text-white font-semibold text-[42px] leading-[100%] tracking-[0%]">
            About Us
          </h2>
          <h2 className="text-2xl text-white">
            Learn about our mission, vision, and history.
          </h2>
        </div>

        {/* Panel 2: Our Mission and Our Vision with Heart Logo */}
        <div className="relative py-[72px] px-6 md:px-[120px]">
          <div className="flex flex-col md:flex-row items-stretch gap-12">
            {/* Our Mission Box */}
            <div className="relative w-full md:w-1/2 bg-[#040E2E] rounded-lg p-8 overflow-hidden min-h-[200px]">
              <div className="absolute inset-0 flex items-center justify-end pointer-events-none ">
                <img
                  src="/heartlogo.png"
                  alt=""
                  className="h-48 translate-x-1/2"
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-3xl font-bold mb-4">
                  Our Mission
                </h2>
                <p className="text-white text-lg">
                  To restore dignity and hope to individuals experiencing
                  homelessness through compassionate service and sustainable
                  support.
                </p>
              </div>
            </div>

            {/* Our Vision Box */}
            <div className="relative w-full md:w-1/2 bg-[#040E2E] rounded-lg p-8 overflow-hidden min-h-[200px]">
              <div className="absolute inset-0 flex items-center justify-start pointer-events-none ">
                <img
                  src="/heartlogo.png"
                  alt=""
                  className="h-48 -translate-x-1/2"
                  style={{ objectFit: "contain", objectPosition: "right" }}
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-white text-3xl font-bold mb-4">
                  Our Vision
                </h2>
                <p className="text-white text-lg">
                  A world where every person has access to safe housing, mental
                  health support, and the resources needed to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 3: Ethan's Story */}
      <div className="py-[72px] px-6 md:px-[120px] bg-[#040E2E]">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-white text-4xl font-bold text-left mb-12 relative z-10">
            Ethan's Story
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* Text column */}
            <div className="w-full lg:w-1/2 relative min-h-[300px] flex flex-col">
              {/* Opening quote*/}
              <img
                src="/open.png"
                alt=""
                className="absolute z-0"
                style={{
                  width: "161px",
                  height: "124px",
                  top: "-40px",
                  left: "-10px",
                  opacity: 0.69,
                }}
              />

              {/* Text content */}
              <p className="text-white text-lg text-left relative z-10 mb-4">
                It's 2017. It's spring in Los Angeles. Life has taken some...
                turns. I'm going through a bankruptcy, a divorce, and (almost)
                an eviction in the space of only a few months. My mental health,
                and my grasp on reality, were faltering. To distract my mind, I
                turned to serving others. Murphy (one of our advisors) and I
                searched the streets of Los Angeles for people to help.
              </p>

              {/* Closing quote*/}
              <img
                src="/close.png"
                alt=""
                className="absolute z-0"
                style={{
                  width: "161px",
                  height: "124px",
                  bottom: "200px",
                  right: "-10px",
                  opacity: 0.69,
                }}
              />

              {/* Button */}
              <button className="bg-gray-500 text-white rounded-[99px] hover:bg-gray-600 transition-colors px-6 py-3 lg:mt-12 relative z-10">
                Continue Reading
              </button>
            </div>

            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <img
                src="/EthanStory.png"
                alt="Ethan's Story"
                className="w-full h-auto rounded-[5.37px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Panel 4: Our History */}
      <div className="py-[72px] px-6 md:px-[120px] bg-[#060A1F]">
        <div className="mb-16">
          <h1 className="text-white text-5xl font-bold text-left mb-4">
            Our History
          </h1>
          <p className="text-white text-lg text-left">
            The Rehumanization Project's journey reflects our commitment to
            partnership-centered care and systemic change.
          </p>
        </div>

        <div className="space-y-24">
          {historyData.map((data, index) => (
            <HistoryPanel key={index} {...data} />
          ))}
        </div>
      </div>

      {/* Panel 5: Good People, Lasting Impact */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 py-[72px] px-6 md:px-[120px] bg-[#040E2E]">
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-white text-4xl font-bold text-left">
            Good People, Lasting Impact
          </h1>
          <h2 className="text-white text-lg text-left mt-6">
            Our team carries years of experience in leadership and service.
          </h2>
          <button className="bg-gray-500 text-white rounded-[99px] px-6 py-3 mt-6 hover:bg-gray-600 transition-colors">
            Meet Our Team
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-end items-start gap-6 relative">
          <div className="relative w-full">
            <img
              src="/OurTeam.png"
              alt="Our Team"
              className="w-full h-auto rounded-[10px]"
            />
            {/* fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[89px] rounded-b-[10px]"
              style={{
                background:
                  "linear-gradient(to top, rgba(4, 14, 46, 0.9), transparent)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Panel 6: FAQ */}
      <div className="py-[72px] px-6 md:px-[120px]">
        <h1 className="text-white text-4xl font-bold text-left mb-8">
          Frequently Asked Questions
        </h1>

        <div className="max-w-4xl">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
