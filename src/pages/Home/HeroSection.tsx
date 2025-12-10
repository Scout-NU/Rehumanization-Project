import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Background Image with Curved Mask */}
      <div className="absolute inset-0 z-0">
        {/* Define the clip path */}
        {/* <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 L 0,0.85 Q 0.5,1 1,0.85 L 1,0 Z" />
            </clipPath>
          </defs>
        </svg> */}

        <img
          src="/headers/home.webp"
          alt="Hands together showing support and community"
          className="w-full h-full object-cover object-center"
          style={{ clipPath: "url(#hero-curve)" }}
        />
        {/* Linear gradient overlay from bg-primary 80% to 0% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6, 10, 31, 0.8) 0%, rgba(6, 10, 31, 0) 100%)",
            clipPath: "url(#hero-curve)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 md:px-20 lg:px-30">
        <div>
          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-5xl lg:text-6xl font-semibold mb-8">
            Building pathways to stability, dignity, and opportunity. Together.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <PrimaryButton className="text-base lg:text-lg">
              Get Support
            </PrimaryButton>
            <SecondaryButton className="text-base lg:text-lg">
              Volunteer With Us
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
