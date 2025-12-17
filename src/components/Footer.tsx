const FooterLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <a
      href={href}
      className="text-white hover:underline text-lg sm:text-base xl:text-lg font-medium"
    >
      {label}
    </a>
  );
};

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row gap-2">
      <a
        href="https://www.instagram.com/help_rehumanize/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-auto"
      >
        <img src="/icons/instagram.svg" className="w-full" />
      </a>
      <a
        href="https://www.facebook.com/therehumanizationproject/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-auto"
      >
        <img src="/icons/facebook.svg" className="w-full" />
      </a>
      <a
        href="https://www.linkedin.com/company/helprehumanize"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-auto"
      >
        <img src="/icons/linkedin.svg" className="w-full" />
      </a>
      <a
        href="https://bsky.app/profile/helprehumanize.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-auto"
      >
        <img src="/icons/bluesky.svg" className="w-full" />
      </a>
      <a
        href="https://www.amazon.com/hz/wishlist/ls/3K5BWXB7CJ9HD?ref_=abls_nvfly_yl"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-auto"
      >
        <img src="/icons/amazon.svg" className="w-full" />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="flex bg-bg-secondary relative overflow-hidden">
      <img
        src="/boston_map_dark.svg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 xs:gap-20 md:gap-20 lg:gap-10 py-10 md:py-20 lg:py-20 max-w-8xl sm:mx-auto px-4 md:px-20 lg:px-30">
        <div className="flex flex-col xs:col-span-1 sm:col-span-1 gap-6 xs:gap-10 sm:gap-5">
          <div className="w-full flex flex-col gap-5">
            <img src="/logo.svg" />
            <div className="hidden sm:block">
              <SocialMediaLinks />
            </div>
          </div>

          {/* Contact shows here only on mobile < xs */}
          <div className="flex sm:hidden flex-col gap-2">
            <p className="font-semibold text-text-secondary text-lg">
              CONTACT US
            </p>
            <div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-white text-lg sm:text-base xl:text-lg font-medium">
                  (339) 857-2356
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-white text-lg sm:text-base xl:text-lg font-medium">
                  help@helprehumanize.org
                </p>
              </div>
            </div>
          </div>

          {/* Socials show here only on mobile < sm */}
          <div className="flex xs:flex sm:hidden flex-col gap-2">
            <p className="font-semibold text-text-secondary text-lg">
              {/* FOLLOW US */}
            </p>
            <div className="">
              <SocialMediaLinks />
            </div>
          </div>

          <div className="xs:hidden h-[1px] bg-bg-quaternary w-full" />
        </div>

        {/* Links section - order-2 on xs, order-3 on sm+ */}
        <div className="flex flex-col xs:col-span-1 xs:order-2 sm:order-3 sm:col-span-1 lg:col-span-3 gap-10">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-text-secondary text-lg">
                GET SUPPORT
              </p>
              <div>
                <FooterLink label="Start Your Journey" href="/start-journey" />

                <br />
                <FooterLink
                  label="Resource Directory"
                  href="/resource-directory"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-text-secondary text-lg">
                GET INVOLVED
              </p>
              <div>
                <FooterLink label="Donation Guide" href="/donation-guide" />
                <br />
                <FooterLink label="Volunteer Projects" href="/volunteer" />
                <br />
                <FooterLink label="Partner With Us" href="/partners" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-text-secondary text-lg">MORE</p>
              <div>
                <FooterLink label="About Us" href="/about" />
                <br />
                <FooterLink label="Our Team" href="/team" />
                <br />
                <FooterLink label="Blog" href="/blog" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact column - order-3 on xs, order-2 on sm+ */}
        <div className="hidden sm:flex flex-col xs:col-span-1 xs:order-3 sm:order-2 sm:col-span-1 lg:col-span-2 gap-2">
          <p className="font-semibold text-text-secondary text-lg">
            CONTACT US
          </p>
          <div>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-white text-lg sm:text-base xl:text-lg font-medium">
                (339) 857-2356
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-white text-lg sm:text-base xl:text-lg font-medium">
                help@helprehumanize.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
