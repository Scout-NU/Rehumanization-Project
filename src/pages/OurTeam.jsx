
const peopleBoard = [
  { name: 'Ethan Bagley', role: 'Director', image: '/team/Ethan.png' },
  { name: 'Céline Mukasine', role: 'Treasurer', image: '/team/Celine.png' },
  { name: 'Kim Bagley', role: 'Clerk', image: '/team/Kim.png' },
  { name: 'C. Todd Lombardo', role: 'Service Design', image: '/team/CTodd.png' },
  { name: 'Jill Farrar', role: 'Service Design', image: '/team/Jill.png' },
  { name: 'Nemas Nemakonde', role: 'Operations', image: '/team/Nemas.png' },
];

const peopleCoops = [
  { name: 'Austin Tollis', role: 'Web Developer Co-op', image: '/team/Austin.png' },
  { name: 'Emma Elmassih', role: 'Web & Systems Developer Co-op', image: '/team/EmmaE.png' },
  { name: 'David Bantikyan', role: 'Policy & Engagement Co-op', image: '/team/David.png' },
  { name: 'Chryssa Donovan', role: 'Community Impact Intern', image: '/team/Chryssa.png' },
  { name: 'Gabriela Reyes', role: 'Referral Research Intern', image: '/team/Gabriela.png' },
  { name: 'Emma Gambo', role: 'Advocacy & Outreach Intern', image: '/team/Emma.png' },
  { name: 'Sarah Addo', role: 'Community Research & Systems Intern', image: '/team/Sarah.png' },
];

const partnerships = [
  {
    name: 'Scout',
    description: 'A student-run design studio where Northeastern students unite to design a better tomorrow.',
    image: '/team/Scout.png',
  },
  {
    name: 'Hult International Business School',
    description: 'Incoming students are creating leadership-focused projects to help TRP grow.',
    image: '/team/Hult.png',
  },
];

const advisoryMembers = [
  { name: 'Jason Stone', image: '/team/JasonStone.png' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
  { name: 'Austin Tollis', image: '' },
];

const PersonCard = ({ name, role, image, bgColor }) => {
  return (
    <div
      className="flex flex-col items-center justify-start p-10 rounded-[10px] w-full"
      style={{ backgroundColor: bgColor, gap: '24px' }}
    >
      <div
        className="w-[140px] h-[140px] rounded-full bg-center bg-cover bg-no-repeat flex-shrink-0"
        style={image ? { backgroundImage: `url('${image}')` } : {}}
      />
      <div className="flex flex-col items-center text-center" style={{ gap: '2px' }}>
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

const PartnershipCard = ({ name, description, image }) => {
  return (
    <div className="flex flex-col items-center p-10 rounded-[10px] w-full bg-[#171F49]" style={{ gap: '24px' }}>
      <div
        className="w-[140px] h-[140px] rounded-full bg-center bg-cover bg-no-repeat flex-shrink-0"
        style={image ? { backgroundImage: `url('${image}')` } : {}}
      />
      <div className="flex flex-col items-center text-center" style={{ gap: '2px' }}>
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

const AdvisoryCard = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center px-5 py-10 rounded-[10px] w-full bg-[#040E2E]" style={{ gap: '24px' }}>
      <div
        className="w-[120px] h-[120px] rounded-full bg-center bg-cover bg-no-repeat flex-shrink-0"
        style={image ? { backgroundImage: `url('${image}')` } : {}}
      />
      <div className="flex flex-col items-center text-center">
        <p className="text-white text-[20px] leading-[24px] font-semibold">
          {name}
        </p>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div
      className="w-screen min-h-screen bg-[#060A1F] overflow-x-hidden"
      style={{ fontFamily: 'Figtree' }}
    >
      {/* Header / Hero */}
      <section
        className="flex flex-col justify-end items-start py-[72px] px-6 md:px-[120px] h-[260px] md:h-[519px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(6,10,31,0.6) 0%, rgba(6,10,31,0.4) 100%), url('/team/TeamImage.png')",
          gap: '10px'
        }}
      >
          <h1 className="text-white font-semibold text-[32px] md:text-[42px] leading-[29px]">
            Our Team
          </h1>
          <p className="text-white font-normal text-xl md:text-[24px] leading-[29px]">
            Meet the people behind the scenes.
          </p>
      </section>

      {/* Board of Directors */}
      <section className="bg-[#060A1F] py-24 px-6 md:px-[120px] flex flex-col items-start" style={{ gap: '40px' }}>
        <h2 className="text-white font-semibold text-[32px] leading-[38px]">
          Board of Directors
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
          {peopleBoard.map((person) => (
            <PersonCard
              key={person.name}
              name={person.name}
              role={person.role}
              image={person.image}
              bgColor="#040E2E"
            />
          ))}
        </div>
      </section>

      {/* Co-ops & Interns */}
      <section className="bg-[#040E2E] py-24 px-6 md:px-[120px] flex flex-col items-start" style={{ gap: '40px' }}>
        <h2 className="text-white font-semibold text-[32px] leading-[38px]">
          Co-ops &amp; Interns (Fall 2025)
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
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

      {/* Partnerships */}
      <section className="bg-[#07153C] py-24 px-6 md:px-[120px] flex flex-col items-start" style={{ gap: '40px' }}>
        <h2 className="text-white font-semibold text-[32px] leading-[38px]">
          Partnerships
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
          {partnerships.map((partner) => (
            <PartnershipCard
              key={partner.name}
              name={partner.name}
              description={partner.description}
              image={partner.image}
            />
          ))}
          <div className="w-full min-h-[336px]"></div>
        </div>
      </section>

      {/* Advisory Group */}
      <section className="bg-[#060A1F] py-24 px-6 md:px-[120px] flex flex-col items-start" style={{ gap: '60px' }}>
        <div className="w-full flex flex-col items-start" style={{ gap: '40px' }}>
          <h2 className="text-white font-semibold text-[32px] leading-[38px]">
            Advisory Group
          </h2>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ gap: '32px' }}>
            {advisoryMembers.map((member, idx) => (
              <AdvisoryCard
                key={member.name + idx}
                name={member.name}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;