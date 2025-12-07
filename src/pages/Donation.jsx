import "./donation-page.css";

const Donation = () => {
    return (
        <div className="donation-page">
        <div className="donation-page-heading">
            <Image
                src="/donation.jpg"
                alt=""
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "top"
                }}
            />
            <div className="gradient-overlay" />
            <div className="donation-heading-text" >
                <p>GET INVOLVED</p>
                <h1 className="donation-page-title">
                    Donation Guide
                </h1>
                <p className="donation-page-subtitle">
                    Donating money, goods, LOREM IPSUM
                </p>
            </div>
        </div>
        <div className="donation-page-content">
            <p>hello</p>
        </div>
    </div>
    );
}

export default Donation;