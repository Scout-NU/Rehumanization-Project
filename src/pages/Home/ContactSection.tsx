import ContactForm from "../../components/ContactForm";

export default function ContactSection() {
  return (
    <section className="relative bg-bg-secondary overflow-hidden">
      {/* Decorative curved lines */}
      <div className="hidden lg:flex w-screen absolute z-0 top-1/3">
        <img src="/squiggly_line.webp" className="w-full" />
      </div>

      <div className="py-10 md:py-20 lg:py-40 max-w-8xl mx-auto px-4 md:px-20 lg:px-30 relative z-20">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 w-full items-start">
          {/* Left side content */}
          <div className="space-y-6 py-6 w-full">
            <h2 className="text-white text-subtitle font-semibold">
              Get Started Today
            </h2>
            <p className="text-text-primary text-body-base">
              Send us a message to start receiving support. Also,{" "}
              <a
                href="#"
                className="underline hover:text-white font-bold transition-colors"
              >
                view our guide on getting started
              </a>
              .
            </p>
          </div>

          {/* Right side form */}
          <div className="z-20 w-full">
            <ContactForm className="bg-bg-secondary lg:bg-bg-quaternary lg:p-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
