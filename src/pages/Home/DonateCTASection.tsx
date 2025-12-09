import PrimaryButton from "../../components/PrimaryButton";

const DonateCTASection = () => {
  return (
    <section className="md:bg-bg-brand py-10 md:px-10 lg:px-10">
      <div className="bg-white max-w-8xl mx-auto p-4 sm:px-10 py-10 relative overflow-hidden md:rounded-xl">
        <img
          src="/donate.png"
          className="absolute sm:-right-20 top-0 h-full w-auto z-0 min-w-0"
          style={{
            maxWidth: "none",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
          }}
        />
        {/* Gradient overlay to fade the image into the background */}
        {/* <div
          className="absolute left-0 top-0 w-full h-full z-0"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        /> */}
        <div className="flex flex-col gap-4 relative z-10 w-2/3 md:w-1/2">
          <p className="text-black text-xl md:text-heading font-semibold">
            Support our mission with a donation of goods or funds
          </p>
          <PrimaryButton className="text-base w-fit">
            View Donation Guide
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default DonateCTASection;
