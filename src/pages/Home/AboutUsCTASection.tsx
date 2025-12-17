import SecondaryButton from "../../components/SecondaryButton";

export default function AboutUsCTASection() {
  return (
    <section className="relative bg-bg-tertiary overflow-hidden">
      <div className="py-10 md:py-20 lg:py-40 max-w-8xl mx-auto px-4 md:px-20 lg:px-30 relative">
        <div className="flex flex-row justify-between items-center">
          <div className="w-full space-y-4 z-10">
            <p className="text-text-primary text-heading font-semibold">
              Want to learn more about our organization?
            </p>
            <SecondaryButton className="text-base">About Us</SecondaryButton>
          </div>

          <div className="w-1/2 lg:w-auto absolute right-5 md:right-20 lg:right-30 z-0">
            <img
              src="/logomark.svg"
              className="w-full md:w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
