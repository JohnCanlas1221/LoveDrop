import React from "react";
import { Link } from "react-router-dom";
import FeaturesCard from "../components/FeaturesCard.jsx";
import Footer from "../components/Footer.jsx";


const FeaturesData = [
    {
        FeatureTitle: "Share Your Love",
        FeatureDescription:
            "Send heartfelt messages to anyone who matters — family, friends, your crush, a favorite teacher, or even your TOTGA. Every connection deserves a little love.",
    },
    {
        FeatureTitle: "Discover Drops for You",
        FeatureDescription:
            "Search your name or unique code to find surprise notes and warm words left just for you, from people you cherish.",
    },
    {
        FeatureTitle: "Open the Moment",
        FeatureDescription:
            "Tap a LoveDrop to see the full message, feel the emotion, and treasure the memory behind every word.",
    },
];

const Home = () => {
    return (
        <>
            {/* Greetings */}

            <div className="grid grid-cols-1 text-center gap-3 p-5">
                <h6 className="text-rose-pink font-pacifico text-[30px]">
                    Love Drop
                </h6>
                <h3 className="font-pacifico text-dark-brown text-[25px]">
                    Send a Secret to Someone Special
                </h3>
                <p className="font-poppins text-muted-gray text-[12px] font-medium">
                    Leave a sweet note or heartfelt message for your crush,
                    family, friends, teacher, TOTGA, or anyone dear to your
                    heart — anonymously or with your name.
                </p>
                <button className="text-poppins font-semibold bg-sunset-orange m-auto px-5 py-2 text-[12px] rounded-4xl">
                    <Link to="SaveNote">Send a Message</Link>
                </button>
            </div>

            {/* Features */}

            {FeaturesData.map((e, i) => (
                <div key={i} className="px-5 py-2">
                    <FeaturesCard
                        FeatureTitle={e.FeatureTitle}
                        FeatureDescription={e.FeatureDescription}
                    />
                </div>
            ))}

            {/* Latest Post */}
            <div className="p-5">
                <h3 className="font-pacifico text-dark-brown text-[24px] text-center">
                    Latest Notes
                </h3>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
