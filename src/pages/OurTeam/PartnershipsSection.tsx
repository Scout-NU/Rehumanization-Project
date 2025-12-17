import PersonCardSmall from "../../components/OurTeam/PersonCardSmall";
import { subtitle } from "../../styles";

const partnerships = [
  {
    name: "Scout",
    description:
      "A student-run design studio where Northeastern students unite to design a better tomorrow.",
    image: "/team/Scout.png",
  },
  {
    name: "Hult International Business School",
    description:
      "Incoming students are creating leadership-focused projects to help TRP grow.",
    image: "/team/Hult.png",
  },
];

const PartnershipCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) => {
  return (
    <div
      className="flex flex-col items-center p-10 rounded-[10px] w-full bg-[#171F49]"
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
        <p className="text-[#CED3E3] text-[18px] leading-[22px] font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

const PartnershipsSection = () => {
  return (
    <section className="bg-bg-tertiary flex flex-col gap-4 items-start max-w-8xl mx-auto px-4 md:px-20 lg:px-30 py-10 md:py-20 lg:py-20 ">
      <h2 className={`text-white font-semibold ${subtitle}`}>Partnerships</h2>

      {/* Small screen - Accordion style */}
      <div className="md:hidden w-full flex flex-col">
        {partnerships.map((partner, index) => (
          <PersonCardSmall
            key={partner.name}
            name={partner.name}
            role=""
            image={partner.image}
            description={partner.description}
            showBorder={index !== partnerships.length - 1}
            isExpandable={true}
          />
        ))}
      </div>

      {/* Medium+ screens - Grid cards */}
      <div
        className="hidden md:grid w-full grid-cols-2 lg:grid-cols-3"
        style={{ gap: "32px" }}
      >
        {partnerships.map((partner) => (
          <PartnershipCard
            key={partner.name}
            name={partner.name}
            description={partner.description}
            image={partner.image}
          />
        ))}
        {/* <div className="w-full min-h-[336px]"></div> */}
      </div>
    </section>
  );
};

export default PartnershipsSection;
