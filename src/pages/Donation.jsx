const DonationSegment = ({ icon, title, description, buttonText, onButtonClick }) => {
    return (
        <div className="bg-transparent rounded-lg shadow-lg p-4 flex flex-col items-start text-left mb-20">
            <img src={icon} alt={title} className="w-16 h-16 mb-2 self-start" />
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-white mt-2">{description}</p>
            <button 
                onClick={onButtonClick} 
                className="mt-4 text-white py-2 px-6 rounded-full self-start inline-flex items-center justify-center"
                style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',           // 20% opacity white
                    boxShadow: '0 0 20px -5px rgba(0,0,0,0.25)'         // 25% black, 20px blur, -5px spread
                }}
            >
                {buttonText}
            </button>
        </div>
    );
};

const Donation = () => {
    const handleButtonClick = () => {
        alert('Button clicked!'); // Replace with your custom action
    };

    return (
        <div className="w-screen min-h-screen bg-[#060A1F] flex flex-col items-center">
            <div className="relative w-full h-[520px] flex flex-col justify-center items-start">
                <img
                    src="/donation.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div 
                    className="absolute inset-0" 
                    style={{ background: 'linear-gradient(to bottom, rgba(6, 10, 31, 0.6), rgba(6, 10, 31, 0.4))' }} 
                />
                <div className="relative z-10 text-left text-[#CED3E3] px-24" style={{ width: '45%' }}>
                    <p className="text-lg">GET INVOLVED</p>
                    <h1 className="text-4xl font-semibold">Donation Guide</h1>
                    <p className="text-xl mt-5">Donating money, goods, and providing people with items they ask for can greatly support our mission of providing wraparound care...</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-start mt-10 px-20 w-full">
                <div className="w-1/2 p-4">
                    <DonationSegment
                        icon="present.png" // Replace with your icon path
                        title="Donate Funds"
                        description="Make a secure one-time or monthly donation to support our mission. Funds go directly to supporting homeless people."
                        buttonText="Make a Secure Donation"
                        onButtonClick={handleButtonClick}
                    />
                    <DonationSegment
                        icon="tent.png" // Replace with your icon path
                        title="Donate Goods"
                        description="We also accept donations of items like clothing, tech, sleeping bags, and more. If you’d like to donate goods, please reach out to us."
                        buttonText="Contact Us"
                        onButtonClick={handleButtonClick}
                    />
                    <DonationSegment 
                        icon="amazon-logo.png" // Replace with your icon path
                        title="Amazon Wishlist"
                        description="View our amazon wishlist to see what clients are asking for right now."
                        buttonText="View Amazon Wishlist"
                        onButtonClick={handleButtonClick}
                    />
                </div>
            </div>
            <div className="w-full bg-[#DD522D] mt-20 px-20 py-20">
                                <div className="bg-white rounded-lg flex flex-row items-center" style={{
                    background: 'linear-gradient(to right, #DDEBF6, #CEE1F2)',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                }}>
                    <div className="w-1/2 flex flex-col items-start justify-center p-8">
                        <div className="w-3/5 flex flex-col text-left">
                            <h2 className="text-5xl font-medium mb-4" style={{ color: '#060A1F', fontSize: '20px' }}>Volunteer with us to continue making an impact</h2>
                            <button 
                                onClick={handleButtonClick}
                                className="text-white py-2 px-6 rounded-full self-start"
                                style={{
                                    backgroundColor: '#DD522D'
                                }}
                            >
                                See Volunteer Opportunities
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <img 
                            src="hands-holding.jpg" 
                            alt="Section Image"
                            className="w-full h-full object-cover rounded-r-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donation;