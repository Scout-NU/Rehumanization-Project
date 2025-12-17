import { FAQItem } from "../../components/FAQSection";
import FAQSection from "../../components/FAQSection";

const faqData: FAQItem[] = [
  {
    question: "What is The Rehumanization Project?",
    answer:
      "The Rehumanization Project is a nonprofit organization dedicated to partnering with individuals experiencing homelessness and economic hardship in the Boston area. We connect people with housing support, healthcare, food assistance, employment resources, and other essential services through our network of trusted community organizations. Our mission is to create long-term, sustainable pathways that restore dignity and stability, treating everyone as partners in their own journey.",
    defaultOpen: true,
  },
  {
    question: "Who do you serve?",
    answer:
      "We serve individuals and families experiencing homelessness and economic hardship in the Boston area. Our programs are designed to support anyone seeking assistance with housing, healthcare, employment, and other essential services.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based in the Boston area and serve communities throughout the greater Boston region. Our team works directly in the field to connect with those who need support.",
  },
  {
    question: "How can I get support right now?",
    answer:
      "You can get started by filling out our contact form or calling us directly at (339) 857-2356. We'll connect you with our team who can assess your needs and link you to appropriate resources and services.",
  },
  {
    question: "How can I get involved?",
    answer:
      "There are many ways to get involved! You can volunteer your time, make a donation, become a partner organization, or help spread awareness about our mission. Visit our Get Involved page to learn more about specific opportunities.",
  },
  {
    question: "What makes TRP's approach different than other organizations?",
    answer:
      "Our approach is centered on dignity, partnership, and long-term sustainability. We treat every individual as a partner in their own journey, not just a recipient of services. We focus on creating lasting pathways to stability through our network of trusted community organizations.",
  },
  {
    question: "Is there a cost for services?",
    answer:
      "No, all of our services are provided free of charge to those who need support. We are funded through donations, grants, and partnerships with community organizations.",
  },
  {
    question:
      "Do you provide services directly or connect people with other organizations?",
    answer:
      "We primarily act as a connector and advocate, linking individuals to our network of trusted community organizations that provide direct services. We also provide case management support to help navigate the system and ensure continuity of care.",
  },
];

const HomeFAQSection = () => {
  return <FAQSection faqs={faqData} className="bg-bg-primary" />;
};

export default HomeFAQSection;
