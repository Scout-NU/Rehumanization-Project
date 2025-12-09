import { useState } from "react";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

export interface FAQItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQAccordion = ({ question, answer, defaultOpen = false }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-bg-quaternary">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:opacity-80 transition-opacity"
      >
        <h3 className="text-white text-body-large font-semibold pr-8">
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <IoAddSharp className="w-6 h-6 text-white" />
          ) : (
            <IoRemoveSharp className="w-6 h-6 text-white" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 pr-12">
          <p className="text-text-secondary text-body-base leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection({
  faqs,
  className,
}: {
  faqs: FAQItem[];
  className?: string;
}) {
  return (
    <section className={`bg-bg-primary py-10 md:py-20 lg:py-20 ${className}`}>
      <div className="max-w-8xl mx-auto px-4 md:px-20 lg:px-30">
        <h2 className="text-white text-subtitle font-semibold mb-4">FAQs</h2>
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
