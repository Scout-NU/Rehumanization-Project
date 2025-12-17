import PersonCardSmall from "../../components/OurTeam/PersonCardSmall";
import { subtitle } from "../../styles";

const peopleCoops = [
  {
    name: "Austin Tollis",
    role: "Web Developer Co-op",
    image: "/team/Austin.png",
  },
  {
    name: "Emma Elmassih",
    role: "Web & Systems Developer Co-op",
    image: "/team/EmmaE.png",
  },
  {
    name: "David Bantikyan",
    role: "Policy & Engagement Co-op",
    image: "/team/David.png",
  },
  {
    name: "Chryssa Donovan",
    role: "Community Impact Intern",
    image: "/team/Chryssa.png",
  },
  {
    name: "Gabriela Reyes",
    role: "Referral Research Intern",
    image: "/team/Gabriela.png",
  },
  {
    name: "Emma Gambo",
    role: "Advocacy & Outreach Intern",
    image: "/team/Emma.png",
  },
  {
    name: "Sarah Addo",
    role: "Community Research & Systems Intern",
    image: "/team/Sarah.png",
  },
];

const PersonCard = ({
  name,
  role,
  image,
  bgColor,
}: {
  name: string;
  role: string;
  image: string;
  bgColor: string;
}) => {
  return (
    <div
      className="flex flex-col items-center justify-start p-10 rounded-[10px] w-full"
      style={{ backgroundColor: bgColor, gap: "24px" }}
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
    </div>
  );
};

const InternsSection = () => {
  return (
    <section className="bg-bg-secondary flex flex-col gap-4 items-start max-w-8xl mx-auto px-4 md:px-20 lg:px-30 py-10 md:py-20 lg:py-20 ">
      <h2 className={`text-white font-semibold ${subtitle}`}>
        Co-ops &amp; Interns (Fall 2025)
      </h2>

      {/* Small screen - Accordion style */}
      <div className="md:hidden w-full flex flex-col">
        {peopleCoops.map((person, index) => (
          <PersonCardSmall
            key={person.name + person.role}
            name={person.name}
            role={person.role}
            image={person.image}
            showBorder={index !== peopleCoops.length - 1}
            isExpandable={false}
          />
        ))}
      </div>

      {/* Medium+ screens - Grid cards */}
      <div
        className="hidden md:grid w-full grid-cols-2 lg:grid-cols-3"
        style={{ gap: "32px" }}
      >
        {peopleCoops.map((person) => (
          <PersonCard
            key={person.name + person.role}
            name={person.name}
            role={person.role}
            image={person.image}
            bgColor="#07153C"
          />
        ))}
      </div>
    </section>
  );
};

export default InternsSection;
