import HeroSection from "../../components/HeroSection";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";
import SecondaryButton from "../../components/SecondaryButton";
import { bodyLarge, subtitle } from "../../styles";
import NavBar from "../../components/NavBar";

const PartnerWithUs = () => {
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
      className="w-screen min-h-screen bg-bg-primary overflow-x-hidden"
      style={{ fontFamily: "Figtree" }}
    >
      <NavBar />
      {/* Header */}
      <HeroSection
        section="Get Involved"
        title="Partner With Us"
        subtitle="We work with organizations to make a broader impact."
        image="/partner.png"
      />

      {/* Content */}
      <section className="bg-bg-primary py-10 md:py-20 px-4 md:px-20 lg:px-30 flex flex-col gap-12 lg:gap-24">
        {/* Link Your Services */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start w-full gap-4 lg:gap-20">
          {/* Text column */}
          <div className="flex flex-col items-start lg:py-6 w-full lg:w-1/2 gap-4 text-left">
            <h2 className={`text-white ${subtitle}`}>Link Your Services</h2>
            <p className={`text-white ${bodyLarge}`}>
              Our Resource Directory connects service recipients with essential
              support across Boston – from shelter and healthcare to legal aid
              and food access. If your organization provides services that could
              help, we'd love to add you to the directory and strengthen our
              community network.
            </p>
            <a href={contactUsURL} className="mt-2">
              <SecondaryButton className="text-base">
                Contact Us
              </SecondaryButton>
            </a>
          </div>

          {/* Image column */}
          <div
            className="w-full lg:w-1/2 h-auto aspect-[400/260] rounded-[16px] bg-cover bg-center mb-3 lg:mb-0"
            style={{ backgroundImage: "url('/services.png')" }}
          />
        </div>

        <div className="flex lg:hidden w-full h-[1px] bg-bg-quaternary" />

        {/* Hold a Fundraiser */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start w-full gap-4 lg:gap-20">
          {/* Text column */}
          <div className="flex flex-col items-start lg:py-6 w-full lg:w-1/2 gap-4 text-left">
            <h2 className={`text-white ${subtitle}`}>Hold a Fundraiser</h2>
            <p className={`text-white ${bodyLarge}`}>
              Bring your community together for The Rehumanization Project.
              Whether it's a neighborhood event, workplace challenge, or
              creative fundraiser, we'll provide support and resources to help
              you make an impact while building awareness about
              partnership-centered care.
            </p>
            <a href={contactUsURL} className="mt-2">
              <SecondaryButton className="text-base">
                Contact Us
              </SecondaryButton>
            </a>
          </div>

          {/* Image column */}
          <div
            className="w-full lg:w-1/2 h-auto aspect-[400/260] rounded-[16px] bg-cover bg-center mb-3 lg:mb-0"
            style={{ backgroundImage: "url('/fundraiser.png')" }}
          />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={faqs} className="bg-bg-secondary" />
      <Footer />
    </div>
  );
};

export default PartnerWithUs;
