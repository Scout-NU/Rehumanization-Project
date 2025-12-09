import PersonCardSmall from "../../components/OurTeam/PersonCardSmall";
import { subtitle } from "../../styles";

const advisoryMembers = [
  {
    name: "Jason Stone",
    role: "Outreach and Municipal Engagement",
    affiliation: "City of Medford Office of Prevention and Outreach",
    image: "/team/advisors/jason_stone.avif",
  },
  {
    name: "Syrah Liles",
    role: "Mental Health",
    affiliation: "Eliot Community Human Services",
    image: "/team/advisors/syrah_liles.avif",
  },
  {
    name: "Amy Leco",
    role: "Marketing & Fundraising",
    affiliation: "Covenant House International",
    image: "/team/advisors/amy_leco.avif",
  },
  {
    name: "Ian Markowitz",
    role: "Operations",
    affiliation: "Director of Operations, Feast & Fettle",
    image: "/team/advisors/ian_markowitz.avif",
  },
  {
    name: "Jordan Claman",
    role: "GIS & Mapping",
    affiliation: "Senior GIS Scientist, Gradient",
    image: "/team/advisors/jordan_claman.avif",
  },
  {
    name: "Nicole O'Donnell",
    role: "Law Enforcement Relations",
    affiliation: "Community Outreach Officer, Everett PD",
    image: "/team/advisors/nicole_odonnell.avif",
  },
  {
    name: "Chris Summa",
    role: "Substance Use Interventions",
    affiliation: "Recovery Coach, North Suffolk",
    image: "/team/advisors/chris_summa.avif",
  },
  {
    name: "Nicole Fearon",
    role: "Marketing & Fundraising",
    affiliation: "Covenant House International",
    image: "/team/advisors/nicole_fearon.avif",
  },
  {
    name: "Nancy Tauber",
    role: "Municipal Relations",
    affiliation: "Cambridge Family Policy Council",
    image: "/team/advisors/nancy_tauber.avif",
  },
  {
    name: "Ji-Hea Kim",
    role: "Operations",
    affiliation: "Vice President of Operations, Pronto Housing",
    image: "/team/advisors/ji-hea_kim.avif",
  },
  {
    name: "Mardi Fuller",
    role: "Director of External Relations",
    affiliation: "Boston Plan for Excellence",
    image: "/team/advisors/mardi_fuller.avif",
  },
  {
    name: "Steve Ridini",
    role: "Nonprofit Leadership",
    affiliation: "Health Resources in Action",
    image: "/team/advisors/steve_ridini.avif",
  },
  {
    name: "Ja-Nae Duane",
    role: "Innovation",
    affiliation: "Faculty & Academic Director, PRIME, Brown University",
    image: "/team/advisors/ja-nae_duane.avif",
  },
  {
    name: "Murphy Bierman",
    role: "Advocacy & Outreach",
    affiliation: "The Rehumanization Project",
    image: "/team/advisors/murphy_bierman.avif",
  },
  {
    name: "Olive",
    role: "Animal Relations",
    affiliation: "The Rehumanization Project",
    image: "/team/advisors/olive.avif",
  },
  {
    name: "David Song",
    role: "Nonprofit Strategy",
    affiliation: "Managing Director, Cara Plus",
    image: "/team/advisors/david_song.avif",
  },
];

const AdvisorsSection = () => {
  return (
    <section className="bg-bg-primary flex flex-col gap-4 items-start max-w-8xl mx-auto px-4 md:px-20 lg:px-30 py-10 md:py-20 lg:py-20 ">
      <h2 className={`text-white font-semibold ${subtitle}`}>Advisory Group</h2>

      {/* Small screens - Expandable accordion style */}
      <div className="lg:hidden w-full flex flex-col">
        {advisoryMembers.map((member, idx) => (
          <PersonCardSmall
            key={member.name + idx}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.affiliation}
            showBorder={idx !== advisoryMembers.length - 1}
            isExpandable={true}
          />
        ))}
      </div>

      {/* Large screens - Non-expandable list */}
      <div className="hidden lg:flex w-full flex-col">
        {advisoryMembers.map((member, idx) => (
          <PersonCardSmall
            key={member.name + idx}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.affiliation}
            showBorder={idx !== advisoryMembers.length - 1}
            isExpandable={false}
          />
        ))}
      </div>
      {/* </div> */}
    </section>
  );
};

export default AdvisorsSection;
