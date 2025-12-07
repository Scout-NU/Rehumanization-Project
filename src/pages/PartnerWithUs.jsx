import { useState } from "react";

const PartnerWithUs = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What types of organizations can partner with TRP?",
      answer:
        "We work with nonprofits, healthcare providers, legal services, housing organizations, food banks, and any community organization serving individuals experiencing homelessness or economic hardship in the Boston area. If your services align with our mission of providing pathways to stability and dignity, we'd love to connect.",
    },
    {
      question: "How do I add my organization to the Resource Directory?",
      answer:
        "Contact us with your organization's name, services offered, location, contact information, and any eligibility requirements. We'll review the information and add you to the appropriate category in our directory - whether that's shelter resources, healthcare, legal aid, or public resources like food and phones.",
    },
    {
      question: "What kind of support does TRP provide for fundraisers?",
      answer:
        "We can provide promotional materials, guidance on event planning, connection to our network for spreading the word, and recognition for your efforts. We're here to make your fundraising experience smooth and impactful, whether you're hosting a small gathering or a larger community event.",
    },
    {
      question: "What types of fundraisers work well for TRP?",
      answer:
        "Anything that brings people together works - 5K runs, benefit concerts, bake sales, trivia nights, art auctions, online campaigns, workplace challenges, or house parties. We've seen creative approaches from all kinds of groups. The best fundraiser is one that fits your community and energy.",
    },
    {
      question: "Can we donate goods instead of holding a fundraiser?",
      answer:
        "Yes. We accept donations of clothing, technology, sleeping bags, hygiene products, and other essentials. Reach out to us first so we can confirm current needs and coordinate delivery or pickup logistics.",
    },
    {
      question:
        "How does TRP decide which organizations to include in the Resource Directory?",
      answer:
        "We prioritize organizations that provide direct services to individuals experiencing homelessness, share our commitment to dignity-centered care, and operate in the Boston area. We verify that organizations are legitimate, accessible, and aligned with our wraparound care approach.",
    },
  ];

  // TODO: Add button URLs here
  const contactUsURL = "/contact"; // Replace with actual URL

  return (
    <div
      className="w-screen min-h-screen bg-[#060A1F] overflow-x-hidden"
      style={{ fontFamily: "Figtree" }}
    >
      {/* Header */}
      <section
        className="flex flex-col justify-end items-start py-[72px] px-6 md:px-[120px] h-[519px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(6, 10, 31, 0.6) 0%, rgba(6, 10, 31, 0.4) 100%), url('/partner.png')",
          gap: "10px",
        }}
      >
        <div
          className="flex flex-col items-start w-full max-w-[596px]"
          style={{ gap: "12px" }}
        >
          <p className="text-[#CED3E3] text-[20px] leading-[24px] font-semibold">
            GET INVOLVED
          </p>
          <h1 className="text-white font-semibold text-[42px] leading-[50px]">
            Partner With Us
          </h1>
          <p className="text-white font-normal text-[24px] leading-[29px]">
            We work with organizations to make a broader impact.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#060A1F] py-[72px] px-6 md:px-[120px] flex flex-col gap-[96px]">
        {/* Link Your Services */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[48px] lg:gap-[96px]">
          {/* Text column */}
          <div className="flex flex-col items-start py-6 w-full lg:w-1/2 gap-4 text-left">
            <h2 className="text-white font-semibold text-[32px] leading-[38px]">
              Link Your Services
            </h2>
            <p className="text-white font-normal text-[20px] leading-[28px] text-left">
              Our Resource Directory connects service recipients with essential
              support across Boston – from shelter and healthcare to legal aid
              and food access. If your organization provides services that could
              help, we'd love to add you to the directory and strengthen our
              community network.
            </p>
            <a href={contactUsURL} className="mt-6">
              <button className="flex flex-row justify-center items-center px-8 py-3.5 rounded-full shadow-md bg-white/20 hover:bg-white/30 transition text-left">
                <span className="text-white font-semibold text-[18px] leading-[22px]">
                  Contact Us
                </span>
              </button>
            </a>
          </div>

          {/* Image column */}
          <div
            className="w-full lg:w-1/2 h-[420px] rounded-[16px] bg-cover bg-center"
            style={{ backgroundImage: "url('/services.png')" }}
          />
        </div>

        {/* Hold a Fundraiser */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[48px] lg:gap-[96px]">
          {/* Text column */}
          <div className="flex flex-col items-start py-6 w-full lg:w-1/2 gap-4 text-left">
            <h2 className="text-white font-semibold text-[32px] leading-[38px]">
              Hold a Fundraiser
            </h2>
            <p className="text-white font-normal text-[20px] leading-[28px] text-left">
              Bring your community together for The Rehumanization Project.
              Whether it's a neighborhood event, workplace challenge, or
              creative fundraiser, we'll provide support and resources to help
              you make an impact while building awareness about
              partnership-centered care.
            </p>
            <a href={contactUsURL} className="mt-6">
              <button className="flex flex-row justify-center items-center px-8 py-3.5 rounded-full shadow-md bg-white/20 hover:bg-white/30 transition text-left">
                <span className="text-white font-semibold text-[18px] leading-[22px]">
                  Contact Us
                </span>
              </button>
            </a>
          </div>

          {/* Image column */}
          <div
            className="w-full lg:w-1/2 h-[420px] rounded-[16px] bg-cover bg-center"
            style={{ backgroundImage: "url('/fundraiser.png')" }}
          />
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#040E2E] py-[72px] px-6 md:px-[120px] flex flex-col items-start gap-[32px]">
        <h2 className="text-white font-semibold text-[32px] leading-[38px]">
          FAQs
        </h2>

        <div className="flex flex-col w-full items-start">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full flex justify-between items-center py-4 text-left hover:opacity-90 transition-opacity pl-0"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
              >
                <h3 className="text-white font-semibold text-[20px] leading-[24px] max-w-[800px] text-left pl-0">
                  {faq.question}
                </h3>

                <div className="flex-shrink-0 w-6 h-6 ml-4">
                  {openFAQ === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="2" fill="white" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="2" fill="white" />
                      <rect x="11" y="5" width="2" height="14" fill="white" />
                    </svg>
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <p className="text-white font-normal text-[20px] leading-[28px] max-w-[800px] text-left pb-6 pt-3 pl-0">
                  {faq.answer}
                </p>
              )}

              {/* Divider */}
              {index < faqs.length - 1 && (
                <div className="w-full h-[1px] bg-[#171F49]"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;
