import { useState } from 'react';

const PartnerWithUs = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What types of organizations can partner with TRP?",
      answer: "We work with nonprofits, healthcare providers, legal services, housing organizations, food banks, and any community organization serving individuals experiencing homelessness or economic hardship in the Boston area. If your services align with our mission of providing pathways to stability and dignity, we'd love to connect."
    },
    {
      question: "How do I add my organization to the Resource Directory?",
      answer: "Contact us with your organization's name, services offered, location, contact information, and any eligibility requirements. We'll review the information and add you to the appropriate category in our directory - whether that's shelter resources, healthcare, legal aid, or public resources like food and phones."
    },
    {
      question: "What kind of support does TRP provide for fundraisers?",
      answer: "We can provide promotional materials, guidance on event planning, connection to our network for spreading the word, and recognition for your efforts. We're here to make your fundraising experience smooth and impactful, whether you're hosting a small gathering or a larger community event."
    },
    {
      question: "What types of fundraisers work well for TRP?",
      answer: "Anything that brings people together works - 5K runs, benefit concerts, bake sales, trivia nights, art auctions, online campaigns, workplace challenges, or house parties. We've seen creative approaches from all kinds of groups. The best fundraiser is one that fits your community and energy."
    },
    {
      question: "Can we donate goods instead of holding a fundraiser?",
      answer: "Yes. We accept donations of clothing, technology, sleeping bags, hygiene products, and other essentials. Reach out to us first so we can confirm current needs and coordinate delivery or pickup logistics."
    },
    {
      question: "How does TRP decide which organizations to include in the Resource Directory?",
      answer: "We prioritize organizations that provide direct services to individuals experiencing homelessness, share our commitment to dignity-centered care, and operate in the Boston area. We verify that organizations are legitimate, accessible, and aligned with our wraparound care approach."
    }
  ];

  // TODO: Add button URLs here
  const contactUsURL = "/contact"; // Replace with actual URL

  return (
    <div className="w-screen min-h-screen bg-[#060A1F] overflow-x-hidden" style={{ fontFamily: 'Figtree' }}>
      {/* Header */}
      <section
        className="flex flex-col justify-end items-start py-[72px] px-6 md:px-[120px] h-[519px] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(6, 10, 31, 0.6) 0%, rgba(6, 10, 31, 0.4) 100%), url('/partner.png')",
          gap: '10px'
        }}
      >
        <div className="flex flex-col items-start w-full max-w-[596px]" style={{ gap: '12px' }}>
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
      <section className="bg-[#060A1F] py-[72px] px-6 md:px-[120px] flex flex-col" style={{ gap: '72px' }}>
        {/* Link Your Services */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full" style={{ gap: '181px' }}>
          <div className="flex flex-col items-start py-6 w-full max-w-[596px]" style={{ gap: '16px' }}>
            <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
              <h2 className="text-white font-semibold text-[32px] leading-[38px]">
                Link Your Services
              </h2>
              <p className="text-white font-normal text-[18px] leading-[22px]">
                Our Resource Directory connects service recipients with essential support across Boston - from shelter and healthcare to legal aid and food access. If your organization provides services that could help, we'd love to add you to the directory and strengthen our community network.
              </p>
            </div>
            {/* TODO: Update url variable above with your contact us URL */}
            <a href={contactUsURL}>
              <button className="flex flex-row justify-center items-center px-4 py-[10px] bg-white bg-opacity-20 rounded-full shadow-md" style={{ gap: '6px' }}>
                <span className="text-white font-semibold text-[16px] leading-[19px]">
                  Contact Us
                </span>
              </button>
            </a>
          </div>
          <div 
            className="w-full max-w-[596px] h-[361px] rounded-[10px] bg-cover bg-center"
            style={{ backgroundImage: "url('/services.png')" }}
          ></div>
        </div>

        {/* Hold a Fundraiser */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full" style={{ gap: '180px' }}>
          <div className="flex flex-col items-start py-6 w-full max-w-[596px]" style={{ gap: '16px' }}>
            <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
              <h2 className="text-white font-semibold text-[32px] leading-[38px]">
                Hold a Fundraiser
              </h2>
              <p className="text-white font-normal text-[18px] leading-[22px]">
                Bring your community together for The Rehumanization Project. Whether it's a neighborhood event, workplace challenge, or creative fundraiser, we'll provide support and resources to help you make an impact while building awareness about partnership-centered care.
              </p>
            </div>
            {/* TODO: Update url variable above with your contact us URL */}
            <a href={contactUsURL}>
              <button className="flex flex-row justify-center items-center px-4 py-[10px] bg-white bg-opacity-20 rounded-full shadow-md" style={{ gap: '6px' }}>
                <span className="text-white font-semibold text-[16px] leading-[19px]">
                  Contact Us
                </span>
              </button>
            </a>
          </div>
          <div 
            className="w-full max-w-[596px] h-[361px] rounded-[10px] bg-cover bg-center"
            style={{ backgroundImage: "url('/fundraiser.png')" }}
          ></div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#040E2E] py-[72px] px-6 md:px-[120px] flex flex-col" style={{ gap: '16px' }}>
        <h2 className="text-white font-semibold text-[32px] leading-[38px]">
          FAQs
        </h2>
        <div className="flex flex-col w-full" style={{ gap: '24px' }}>
          {faqs.map((faq, index) => (
            <div key={index}>
              {index > 0 && (
                <div className="w-full h-[1px] bg-[#171F49] mb-6"></div>
              )}
              <div className="flex flex-col" style={{ gap: '8px' }}>
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="flex flex-row justify-between items-center w-full"
                >
                  <h3 className="text-white font-semibold text-[20px] leading-[24px] text-left">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6">
                    {openFAQ === index ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="11" width="14" height="2" fill="white"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="11" width="14" height="2" fill="white"/>
                        <rect x="11" y="5" width="2" height="14" fill="white"/>
                      </svg>
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <p className="text-white font-normal text-[18px] leading-[22px] max-w-[596px] mt-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;