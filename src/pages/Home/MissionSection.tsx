export default function MissionSection() {
  return (
    <section className="relative bg-bg-primary overflow-hidden">
      {/* Boston Map Background - Desktop only */}
      <div className="hidden lg:block absolute -top-[200px] right-0 h-[calc(100%+200px)] w-1/2 pointer-events-none overflow-visible">
        <img
          src="/boston_map.svg"
          alt="Boston map"
          className="absolute right-0 top-0 translate-x-[600px] w-full min-w-[1300px] h-auto opacity-80"
          style={{ maxWidth: "none" }}
        />
      </div>

      {/* Content */}
      <div className="relative pt-10 md:pt-20 lg:pb-20 max-w-8xl mx-auto px-4 md:px-20 lg:px-30">
        {/* Text Content - Full width on mobile, 3 columns on desktop */}
        <div className="mb-10 md:mb-20 lg:mb-0 lg:grid lg:grid-cols-6 lg:gap-[80px]">
          <div className="space-y-6 max-w-xl lg:col-span-3">
            <p className="text-text-primary text-body-large">
              The Rehumanization Project partners with individuals experiencing
              homelessness in the Boston area to build pathways toward
              stability, dignity, and opportunity — combining compassionate
              outreach with wraparound care and systemic advocacy.
            </p>
          </div>

          {/* Spacer for desktop */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Stats - Desktop positioning */}
          <div className="hidden lg:block relative z-10 space-y-16 lg:col-span-2">
            {/* Stat 1 */}
            <div className="flex flex-col items-start">
              <h2 className="text-white text-7xl font-bold leading-none mb-3">
                12+
              </h2>
              <p className="text-text-primary text-body-base">
                people served in 2025
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-start">
              <h2 className="text-white text-7xl font-bold leading-none mb-3">
                2
              </h2>
              <p className="text-text-primary text-body-base">
                individuals housed so far
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Map and Stats below text */}
        <div className="lg:hidden relative">
          {/* Full width map background for mobile */}
          <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
            <img
              src="/boston_map.svg"
              alt="Boston map"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Stats overlay on map - Single column on xs, side by side on sm-md */}
          <div className="relative z-10 py-12 flex flex-col sm:flex-row space-y-16 sm:space-y-0">
            {/* Stat 1 */}
            <div className="flex flex-col items-start w-full sm:w-1/2">
              <h2 className="text-white text-6xl lg:text-7xl font-bold leading-none mb-3">
                12+
              </h2>
              <p className="text-text-primary text-body-base">
                people served in 2025
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-start w-full sm:w-1/2 ">
              <h2 className="text-white text-6xl lg:text-7xl font-bold leading-none mb-3">
                2
              </h2>
              <p className="text-text-primary text-body-base">
                individuals housed so far
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
