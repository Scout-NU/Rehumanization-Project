import React from "react";
import { subtitle } from "../../styles";
import PersonCardSmall from "../../components/OurTeam/PersonCardSmall";
import SecondaryButton from "../../components/SecondaryButton";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const peopleBoard = [
  {
    name: "Ethan Bagley",
    role: "Director",
    image: "/team/Ethan.png",
    quote: '"Lead with your heart. Fight with your head."',
    description:
      "Working to prevent individuals and families from experiencing homelessness, serving those who already are.",
  },
  {
    name: "Céline Mukasine",
    role: "Treasurer",
    image: "/team/Celine.png",
    description:
      "Aspiring to collaborate with others to promote kind, compassionate, healthy, and inclusive communities. Dedicated to helping mission-driven orgs build resilient financial and operational systems for long-lasting results.",
  },
  {
    name: "Kim Bagley",
    role: "Clerk",
    image: "/team/Kim.png",
    description:
      "Years of in-person customer service. Keen to help ensure the Project and the Board operate effectively, so we can best serve our clients.",
  },
  {
    name: "C. Todd Lombardo",
    role: "Service Design",
    image: "/team/CTodd.png",
    description:
      "Product-guy who believes 'product'​ is not the right fit for today's data-driven, experiential world. I focus on building and mentoring teams in areas of user experience design, product management, and product strategy.",
  },
  {
    name: "Jill Farrar",
    role: "Service Design",
    image: "/team/Jill.png",
    description:
      "Curious about solving for the right problems. Ambitious about expanding possibilities. Facilitating teams to work together at their best.",
  },
  {
    name: "Nemas Nemakonde",
    role: "Operations",
    image: "/team/Nemas.png",
    description:
      "I bring a comprehensive understanding of financial management, operational leadership, and business development to ensure both short-term and long-term success.",
  },
];

const PersonCard = ({
  name,
  description,
  role,
  image,
  bgColor,
  quote,
}: {
  name: string;
  description?: string;
  role: string;
  image: string;
  bgColor: string;
  quote?: string;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className="group flex flex-col items-center justify-start p-10 rounded-[10px] w-full transition-all duration-300 relative overflow-hidden"
      style={{ backgroundColor: bgColor, gap: "24px" }}
    >
      {/* Default state content */}
      <div
        className={`${description ? "md:group-hover:opacity-0" : ""} ${
          isExpanded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300 flex flex-col items-center w-full`}
        style={{ gap: "24px" }}
      >
        <div
          className="w-[140px] h-[140px] rounded-full bg-center bg-cover bg-no-repeat flex-shrink-0"
          style={image ? { backgroundImage: `url('${image}')` } : {}}
        />
        <div
          className="flex flex-col items-center text-center"
          style={{ gap: "2px" }}
        >
          <p className="text-white text-[20px] leading-[24px] font-semibold">
            {name}
          </p>
          {role && (
            <p className="text-[#CED3E3] text-[18px] leading-[22px] font-medium">
              {role}
            </p>
          )}
        </div>

        {/* More button for mobile */}
        {description && (
          <SecondaryButton
            onClick={() => setIsExpanded(true)}
            className="[@media(hover:none)]:block hidden absolute right-4 bottom-4 text-white text-base transition-all z-10"
          >
            <IoAddSharp />
          </SecondaryButton>
        )}
      </div>

      {/* Hover/Expanded state content */}
      {description && (
        <div
          className={`absolute inset-0 ${
            isExpanded ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
          } transition-opacity duration-300 flex flex-col items-start justify-start p-6 gap-4`}
        >
          <div className="flex flex-row items-center gap-3">
            <div
              className="w-14 h-14 rounded-full bg-center bg-cover bg-no-repeat flex-shrink-0"
              style={image ? { backgroundImage: `url('${image}')` } : {}}
            />
            <div className="flex flex-col items-start gap-0.5">
              <p className="text-white text-[20px] leading-[24px] font-semibold">
                {name}
              </p>
              {role && (
                <p className="text-[#CED3E3] text-[18px] leading-[22px] font-medium">
                  {role}
                </p>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-bg-quaternary"></div>

          <div className="flex flex-col items-start text-start w-full gap-3">
            {quote && (
              <p className="text-white text-base font-normal italic">{quote}</p>
            )}

            {/* Description */}
            <p className="text-white text-base font-normal">{description}</p>
          </div>

          {/* Close button - only visible on touch devices */}
          {description && (
            <SecondaryButton
              onClick={() => setIsExpanded(false)}
              className="[@media(hover:none)]:block hidden absolute right-4 bottom-4 text-white text-base transition-all z-10"
            >
              <IoRemoveSharp />
            </SecondaryButton>
          )}
        </div>
      )}
    </div>
  );
};

const BoardMembersSection = () => {
  return (
    <section className="bg-bg-primary flex flex-col gap-4 items-start max-w-8xl mx-auto px-4 md:px-20 lg:px-30 py-10 md:py-20 lg:py-20 ">
      <h2 className={`text-white font-semibold ${subtitle}`}>
        Board of Directors
      </h2>

      {/* Small screen - Accordion style */}
      <div className="md:hidden w-full flex flex-col">
        {peopleBoard.map((person, index) => (
          <PersonCardSmall
            key={person.name + index}
            name={person.name}
            role={person.role}
            image={person.image}
            description={person.description}
            quote={person.quote}
            showBorder={index !== peopleBoard.length - 1}
          />
        ))}
      </div>

      {/* Medium+ screens - Grid with hover cards */}
      <div
        className="hidden md:grid w-full grid-cols-2 lg:grid-cols-3"
        style={{ gap: "32px" }}
      >
        {peopleBoard.map((person) => (
          <PersonCard
            key={person.name}
            name={person.name}
            role={person.role}
            image={person.image}
            bgColor="#040E2E"
            description={person.description}
            quote={person.quote}
          />
        ))}
      </div>
    </section>
  );
};

export default BoardMembersSection;
