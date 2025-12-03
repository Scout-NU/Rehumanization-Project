//HistoryPanel component
const HistoryPanel = ({
                          startYear,
                          endYear,
                          title,
                          description,
                          image,
                          imagePosition = 'right'
                      }) => (
    <div className="flex flex-row justify-between items-start gap-12 w-full">
        {/* Text content */}
        <div className={`w-1/2 flex flex-col items-start gap-6 ${imagePosition === 'left' ? 'order-2' : 'order-1'}`}>
            {/* Eyebrow years */}
            <p className="text-[#DD522D] text-sm font-semibold uppercase tracking-wider">
                {startYear} - {endYear}
            </p>

            {/* Title */}
            <h1 className="text-white text-4xl font-bold text-left">{title}</h1>

            {/* Description */}
            <div className="relative">
                <h2 className="text-white text-lg text-left relative z-10">
                    {description}
                </h2>

            </div>
        </div>

        {/* Image */}
        {image && (
            <div className={`w-1/2 flex flex-col items-start gap-4 ${imagePosition === 'left' ? 'order-1' : 'order-2'}`}>
                <img
                    src={image}
                    alt={title}
                    className="w-full max-w-[464px] h-[464px] object-cover rounded-lg shrink-0"
                />
            </div>
        )}
    </div>
);

//  Our History section
const historyData = [
    {
        startYear: "2017",
        endYear: "2018",
        title: "Ethan's Story",
        description: "It's 2017. It's spring in Los Angeles. Life has taken some... turns. I'm going through a bankruptcy, a divorce, and (almost) an eviction in the space of only a few months. My mental health, and my grasp on reality, were faltering. To distract my mind, I turned to serving others. Murphy (one of our advisors) and I searched the streets of Los Angeles for people to help.",
        image: "/EthanStory.png",
        imagePosition: "right"
    },
    {
        startYear: "2018",
        endYear: "2019",
        title: "Growing Our Impact",
        description: "What started as two people helping others on the streets grew into a movement. We established our first community center and began offering comprehensive services including mental health support, job training, and emergency housing assistance.",
        image: "/growing-impact.png",
        imagePosition: "left"
    },
    {
        startYear: "2019",
        endYear: "2020",
        title: "Expanding Our Reach",
        description: "As word spread about our work, volunteers from across the country reached out wanting to help. We launched our volunteer program and expanded to three cities, helping over 500 individuals find stable housing and employment.",
        image: "/expanding-reach.png",
        imagePosition: "right"
    },
    {
        startYear: "2020",
        endYear: "2022",
        title: "Rising to the Challenge",
        description: "The pandemic brought unprecedented challenges for vulnerable communities. We adapted quickly, providing essential supplies, telehealth services, and emergency support to over 2,000 families during the crisis.",
        image: "/pandemic-response.png",
        imagePosition: "left"
    },
    {
        startYear: "2022",
        endYear: "Present",
        title: "Building the Future",
        description: "Today, The Rehumanization Project operates in 15 cities nationwide, with over 300 active volunteers and partnerships with local governments and organizations. We've helped over 10,000 individuals transition from homelessness to stable housing.",
        image: "/building-future.png",
        imagePosition: "right"
    }
];

const AboutUs = () => {
    return (
        <div className="w-screen min-h-screen bg-[#060A1F] overflow-x-hidden" style={{fontFamily: 'Figtree'}}>
            <div className="grid grid-rows-[auto_auto_auto_auto] gap-4">
                {/* Panel 1: Our Impact Hero */}
                <div
                    className="flex flex-col justify-end items-start gap-2.5
                        py-8 md:py-[72px]
                        px-6 md:px-[120px]
                        h-64 md:h-[519px]
                        shrink-0 bg-cover bg-center"
                    style={{backgroundImage: "url('/Public/OurImpactHeader.png')"}}
                >
                    <h2 className="text-white font-semibold text-[42px] leading-[100%] tracking-[0%]">About Us</h2>
                    <h2 className="text-lg md:text-2xl text-white">Learn about our mission, vision, and history.</h2>
                </div>

                {/* Panel 2: Our Mission and Our Vision */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 py-8 md:py-[72px] px-6 md:px-[120px]">
                    <div className="w-1/2">
                        <h2 className="text-white text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-white text-lg">
                            To restore dignity and hope to individuals experiencing homelessness through
                            compassionate service and sustainable support.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-white text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-white text-lg">
                            A world where every person has access to safe housing, mental health support,
                            and the resources needed to thrive.
                        </p>
                    </div>
                </div>
            </div>

            {/* Panel 3: Ethan's Story */}
            <div className="py-8 md:py-[72px] px-6 md:px-[120px] bg-[#040E2E]">
                <HistoryPanel {...historyData[0]} />

                {/* Continue Reading Button */}
                <div className="flex flex-row gap-4 mt-8">
                    <button className="bg-[#DD522D] text-white rounded-[99px] px-6 py-3">
                        Continue Reading
                    </button>
                </div>
            </div>

            {/* Panel 4: Our History */}
            <div className="py-8 md:py-[72px] px-6 md:px-[120px] bg-[#060A1F]">
                <h1 className="text-white text-5xl font-bold text-center mb-16">Our History</h1>

                {/* Render all history panels */}
                <div className="space-y-24">
                    {historyData.map((data, index) => (
                        <HistoryPanel key={index} {...data} />
                    ))}
                </div>
            </div>

            {/* Panel 5: Good People, Lasting Impact */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12
                py-8 md:py-[72px]
                px-6 md:px-[120px] bg-[#040E2E]">
                <div className="w-1/2">
                    <h1 className="text-white text-4xl font-bold text-left">Good People, Lasting Impact</h1>

                    <h2 className="text-white text-lg text-left mt-6">
                        Our team carries years of experience in leadership and service.
                    </h2>

                    <button className="bg-[#DD522D] text-white rounded-[99px] px-6 py-3 mt-6">
                        Meet Our Team
                    </button>
                </div>

                <div className="w-1/2 flex flex-col items-start gap-6">
                    <img
                        src="/OurTeam.png"
                        alt="Our Team"
                        className="w-full max-w-[464px] h-[464px] object-cover rounded-lg shrink-0"
                    />
                </div>
            </div>

            {/* Panel 6: FAQ */}
            <div className="py-8 md:py-[72px] px-6 md:px-[120px] bg-[#060A1F]">
                <h1 className="text-white text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                {/* FAQ content placeholder */}
            </div>
        </div>
    );
};

export default AboutUs;