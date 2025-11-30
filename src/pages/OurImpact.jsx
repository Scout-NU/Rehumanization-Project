// StatCard Component
const StatCard = ({ stat, description }) => {
    return (
        <div className="flex flex-col justify-end items-center gap-2">
            {/*Blue Circle*/}
            <div>
                <canvas
                    width="98"
                    height="98"
                    className="bg-[#2B3987] rounded-full flex-shrink-0">
                </canvas>
            </div>
            {/*stat*/}
            <div>
                <h2 className="text-center text-white font-bold text-2xl">{stat}</h2>
            </div>
            {/*stat subhead*/}
            <div>
                <h2 className="text-center text-white max-w-[276px]">
                    {description}
                </h2>
            </div>
        </div>
    );
};

const OurImpact = () => {
    return (
        <div className="w-screen min-h-screen bg-[#060A1F] overflow-x-hidden" style={{fontFamily: 'Figtree'}}>
            <div className="grid grid-rows-[auto_auto_auto_auto] gap-4">
                {/*Panel 1: Our Impact Hero*/}
                <div
                    className="flex flex-col justify-end items-start gap-2.5
               py-8 md:py-[72px]
               px-6 md:px-[120px]
               h-64 md:h-[519px]
               shrink-0 bg-cover bg-center"
                    style={{backgroundImage: "url('/Public/OurImpactHeader.png')"}}
                >
                    <h2 className="text-white font-semibold text-[42px] leading-[100%] tracking-[0%]"> Our Impact </h2>
                    <h2 className="text-lg md:text-2xl text-white"> Discover the power of wraparound
                        care</h2>
                </div>

                {/*Panel 2: Wraparound Care*/}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 py-8 md:py-[72px] px-6 md:px-[120px]">
                    {/*Text on left side of the panel*/}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-4xl font-bold text-white text-left"> Wraparound
                            care </h2>
                        <h2 className="text-lg md:text-2xl text-white text-left mt-6 md:mt-10"> Building a
                            team around the person — not sending them through
                            the maze of services alone. It's about connecting housing, healthcare,
                            benefits,
                            and support into one coordinated, human-centered plan. Real help, rooted
                            in trust and dignity.</h2>
                    </div>
                    {/*Hands logo on right side of the panel*/}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src="/heartlogo.png"
                            alt="Heart Logo"
                            className="w-full max-w-[606px] h-auto"/>
                    </div>
                </div>

                {/*Panel 3: Stats*/}
                <div
                    className="flex flex-col justify-between items-start gap-12
               py-8 md:py-[72px]
               px-6 md:px-[120px]
               min-h-[519px]
               shrink-0 bg-cover bg-center mt-60"
                    style={{backgroundImage: "url('/Public/blueMap.png')"}}
                >
                    {/*Stats*/}
                    <div className="flex flex-row justify-between items-center w-full">
                        <StatCard
                            stat="200+"
                            description="People moved out of homelessness last year"
                        />
                        <StatCard
                            stat="600+"
                            description="Individuals Supported each day"
                        />
                        <StatCard
                            stat="150+"
                            description="Number of contacts daily by our outreach team"
                        />
                    </div>

                    {/*heading*/}
                    <div className="text-white text-left w-full">
                        <h2 className="font-semibold text-[32px] leading-none tracking-normal">
                            Interested in contributing to our impact and joining the cause?
                        </h2>
                    </div>

                    {/*buttons*/}
                    <div className="flex flex-row justify-start items-center gap-6 w-full">
                        <button className="bg-[#DD522D] text-white rounded-[99px] px-6 py-3">Partner
                            with Us
                        </button>
                        <button
                            className="bg-[#DD522D] text-white rounded-[99px] px-6 py-3">Donate
                        </button>
                        <button
                            className="bg-[#DD522D] text-white rounded-[99px] px-6 py-3">Volunteer
                        </button>
                    </div>
                </div>

                {/*Panel 4: Stories of Success*/}
                <div className="flex flex-row justify-between items-start gap-12
               py-8 md:py-[72px]
               px-6 md:px-[120px]
               min-h-[519px]
               shrink-0 bg-cover bg-center mt-60">
                    <div className="w-1/2 flex flex-col items-start gap-4">
                        {/*Image of Casey*/}
                        <img
                            src="/Casey.png"
                            alt="Casey"
                            className="w-[464px] h-[464px] shrink-0"/>

                    </div>

                    {/*Text to stories of success*/}
                    <div className="w-1/2 flex flex-col items-start gap-6">
                        {/*Eyebrow*/}
                        <h2 className="text-white text-sm font-semibold tracking-wider text-left">STORIES OF SUCCESS</h2>
                        {/*Whose story*/}
                        <h1 className="text-white text-4xl font-bold text-left">Casey's Story</h1>
                        {/*Description*/}
                        <h2 className="text-white text-lg text-left">
                            When we first met Casey, he was carrying everything he owned in two plastic bags.
                            Today, he's a peer advocate helping others navigate their own paths forward.
                            <br/><br/>
                            "The difference wasn't just the resources," Casey says. "It was being treated
                            like a person with something to offer, not just someone with problems to fix."
                        </h2>
                        {/*Buttons*/}
                        <div className="flex flex-row gap-4">
                            <button className="bg-[#DD522D] text-white rounded-[99px] px-6 py-3">
                                Read Casey's Story
                            </button>
                            <button className="bg-white/20 text-white rounded-[99px] px-6 py-3">
                                View All Posts
                            </button>
                        </div>

                        {/*Heart logo*/}
                        <div className="w-full flex justify-end mt-8">
                            <img
                                src="/heart.png"
                                alt="heart"
                                className="w-[509px] h-[438px] shrink-0 translate-x-24"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurImpact;