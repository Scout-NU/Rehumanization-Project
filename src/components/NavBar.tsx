import { useState, useEffect, useRef } from "react";
import PrimaryButton from "./PrimaryButton";
import { IoChevronDownSharp, IoMenu, IoClose, IoCloseSharp, IoMenuSharp } from "react-icons/io5";

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<number>(0);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeDropdown) {
      setTimeout(() => setIsDropdownVisible(true), 10);

      // Calculate position of active nav item
      const activeElement = navItemRefs.current[activeDropdown];
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        const containerElement = activeElement.closest(".max-w-8xl");
        if (containerElement) {
          const containerRect = containerElement.getBoundingClientRect();
          // Calculate position relative to the container, using the left edge of the nav item
          setDropdownPosition(rect.left - containerRect.left);
        }
      }
    } else {
      setIsDropdownVisible(false);
    }
  }, [activeDropdown]);

  const dropdownData = {
    "Get Support": [
      { label: "Start Your Journey", href: "/start-journey" },
      { label: "Resource Directory", href: "/resources" },
      { label: "Log in to Client Portal", href: "/client-portal" },
    ],
    "Get Involved": [
      { label: "Donation Guide", href: "/donation-guide" },
      { label: "Volunteer Projects", href: "/volunteer" },
      { label: "Partner With Us", href: "/partners" },
    ],
    About: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavHovered || isScrolled || isMobileMenuOpen
          ? "bg-bg-primary shadow-lg"
          : "bg-transparent"
      }`}
      onMouseLeave={() => {
        setActiveDropdown(null);
        setIsNavHovered(false);
      }}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-10 lg:px-30">
        <div
          className="flex items-center justify-between h-20"
          onMouseEnter={() => setIsNavHovered(true)}
        >
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="The Rehumanization Project"
              width={180}
              height={40}
              className="block md:hidden lg:block h-10 w-auto"
            />
            <img
              src="/logo_singular_white.svg"
              alt="The Rehumanization Project"
              width={180}
              height={40}
              className="hidden md:block lg:hidden h-10 w-auto"
            />
          </a>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {Object.keys(dropdownData).map((navItem) => (
                <div
                  key={navItem}
                  ref={(el) => {
                    navItemRefs.current[navItem] = el;
                  }}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(navItem)}
                >
                  <button className="text-white hover:text-text-secondary transition-colors text-base font-semibold group flex items-center py-6">
                    {navItem}
                    <IoChevronDownSharp
                      className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === navItem ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}

              <a
                href="/blog"
                className="text-white hover:text-text-secondary transition-colors text-base font-semibold py-6"
                onMouseEnter={() => setActiveDropdown(null)}
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-white hover:text-text-secondary transition-colors text-base font-semibold py-6"
                onMouseEnter={() => setActiveDropdown(null)}
              >
                Contact
              </a>
            </div>

            {/* Donate Button */}
            <div onMouseEnter={() => setActiveDropdown(null)}>
              <PrimaryButton
                className="text-body-small"
                onClick={() =>
                  window.open(
                    "https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-12970",
                    "_blank"
                  )
                }
              >
                Donate
              </PrimaryButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-bg-primary z-50 overflow-y-auto">
            <div className="flex flex-col h-full px-6 py-8 space-y-8">
              {/* Get Support */}
              <div>
                <p className="text-text-secondary text-lg font-semibold mb-4">
                  GET SUPPORT
                </p>
                <div className="flex flex-col space-y-3">
                  {dropdownData["Get Support"].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-white hover:text-text-secondary transition-colors text-2xl font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <hr className="border-bg-quaternary" />

              {/* Get Involved */}
              <div>
                <p className="text-text-secondary text-lg font-semibold mb-4">
                  GET INVOLVED
                </p>
                <div className="flex flex-col space-y-3">
                  {dropdownData["Get Involved"].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-white hover:text-text-secondary transition-colors text-2xl font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <hr className="border-bg-quaternary" />

              {/* About */}
              <div>
                <p className="text-text-secondary text-lg font-semibold mb-4">
                  ABOUT
                </p>
                <div className="flex flex-col space-y-3">
                  {dropdownData["About"].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-white hover:text-text-secondary transition-colors text-2xl font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <hr className="border-bg-quaternary" />

              {/* Blog */}
              <div>
                <a
                  href="/blog"
                  className="text-white hover:text-text-secondary transition-colors text-2xl font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </a>
              </div>

              <hr className="border-bg-quaternary" />

              {/* Contact */}
              <div>
                <a
                  href="/contact"
                  className="text-white hover:text-text-secondary transition-colors text-2xl font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>

              {/* Donate Button - Positioned at bottom */}
              <div className="mt-auto pt-8">
                <PrimaryButton
                  className="w-full text-base mb-4"
                  onClick={() => {
                    window.open(
                      "https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-12970",
                      "_blank"
                    );
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Donate
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}

        {/* Dropdown Content */}
        {isNavHovered && (
          <div
            className={`absolute left-0 right-0 bg-bg-primary ease-out ${
              isDropdownVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
            style={{
              minHeight: activeDropdown
                ? `${
                    (dropdownData[activeDropdown as keyof typeof dropdownData]
                      ?.length || 0) *
                      60 +
                    8
                  }px`
                : "40px",
              transition: "all 0.3s ease-out, min-height 0.3s ease-out",
            }}
          >
            <div className="max-w-8xl mx-auto px-4 md:px-20 lg:px-30 relative">
              <div className="py-0">
                {activeDropdown && (
                  <div
                    className="flex flex-col space-y-4 min-w-max absolute"
                    style={{
                      left: `${dropdownPosition}px`,
                    }}
                  >
                    {dropdownData[
                      activeDropdown as keyof typeof dropdownData
                    ]?.map((item, index) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`text-white hover:text-text-secondary transition-all duration-200 text-xl font-semibold ${
                          isDropdownVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                        }`}
                        style={{
                          transitionDelay: isDropdownVisible
                            ? `${index * 50}ms`
                            : "0ms",
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
