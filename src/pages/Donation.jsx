const DonationSegment = ({ icon, title, description, buttonText, onButtonClick }) => {
    return (
        <div className="bg-transparent rounded-lg shadow-lg p-4 flex flex-col items-start text-left">
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
                <div className="relative z-10 text-left text-[#CED3E3] px-24">
                    <p className="text-lg">GET INVOLVED</p>
                    <h1 className="text-4xl font-semibold">Donation Guide</h1>
                    <p className="text-xl mt-5">Donating money, goods, and providing people with items they ask for can greatly support our mission of providing wraparound care...</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-start mt-10 px-20 w-full">
                <div className="w-1/2 p-4">
                    <DonationSegment
                        icon="/path/to/icon.png" // Replace with your icon path
                        title="Title Here"
                        description="This is a description of the segment."
                        buttonText="Click Me"
                        onButtonClick={handleButtonClick}
                    />
                    <DonationSegment
                        icon="/path/to/icon.png" // Replace with your icon path
                        title="Title Here"
                        description="This is a description of the segment."
                        buttonText="Click Me"
                        onButtonClick={handleButtonClick}
                    />
                    <DonationSegment 
                        icon="/path/to/icon.png" // Replace with your icon path
                        title="Title Here"
                        description="This is a description of the segment."
                        buttonText="Click Me"
                        onButtonClick={handleButtonClick}
                    />
                </div>
                {/* Add more DonationSegment components as needed */}
            </div>
        </div>
    );
}

export default Donation;