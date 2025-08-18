import React from "react";
import { Link } from "react-router-dom";
import FeaturesCard from "../components/FeaturesCard.jsx";
import Footer from "../components/Footer.jsx";
import LatestPost from "../components/LatestPost.jsx";


const FeaturesData = [
    {
        FeatureTitle: "Share Your Love",
        FeatureDescription:
            "Write heartfelt notes to anyone special — your crush, family, friends, a favorite teacher, or even your TOTGA. Every message is a little drop of love that lasts.",
    },
    {
        FeatureTitle: "Discover Your Drops",
        FeatureDescription:
            "Search your name or scan a QR to uncover surprise notes and sweet words left just for you by the people who care.",
    },
    {
        FeatureTitle: "Open the Moment",
        FeatureDescription:
            "Tap a LoveDrop to reveal the full message, feel the emotion, and hold onto the memory forever.",
    },
];

const LatestPostData = [
    {
        Sender: "Anonymous",
        Receiver: "John Canlas",
        SpecialNote:
            "My love for you grows with every passing day. Just like the sun rises without fail, my heart beats steadily for you. In a world that changes so quickly, you are my constant, my comfort, and my peace. No matter the storms or the quiet nights, I will always be by your side. Your smile lights up my darkest days, and your voice calms the chaos within me. Life moves forward, time never stops, but one thing will always remain true—my love, loyalty, and admiration for you. Stay strong, stay true to yourself, and know that you’re never alone. You are cherished beyond words, and I’ll keep reminding you of that forever. My love for you is endless. My heart is yours, completely.",
        DateCreated: "August 18, 2025",
    },
    {
        Sender: "Anonymous",
        Receiver: "John Canlas",
        SpecialNote:
            "My love for you grows with every passing day. Just like the sun rises without fail, my heart beats steadily for you. In a world that changes so quickly, you are my constant, my comfort, and my peace. No matter the storms or the quiet nights, I will always be by your side. Your smile lights up my darkest days, and your voice calms the chaos within me. Life moves forward, time never stops, but one thing will always remain true—my love, loyalty, and admiration for you. Stay strong, stay true to yourself, and know that you’re never alone. You are cherished beyond words, and I’ll keep reminding you of that forever. My love for you is endless. My heart is yours, completely.",
        DateCreated: "August 18, 2025",
    },
    {
        Sender: "Anonymous",
        Receiver: "John Canlas",
        SpecialNote:
            "My love for you grows with every passing day. Just like the sun rises without fail, my heart beats steadily for you. In a world that changes so quickly, you are my constant, my comfort, and my peace. No matter the storms or the quiet nights, I will always be by your side. Your smile lights up my darkest days, and your voice calms the chaos within me. Life moves forward, time never stops, but one thing will always remain true—my love, loyalty, and admiration for you. Stay strong, stay true to yourself, and know that you’re never alone. You are cherished beyond words, and I’ll keep reminding you of that forever. My love for you is endless. My heart is yours, completely.",
        DateCreated: "August 18, 2025",
    },
    {
        Sender: "Anonymous",
        Receiver: "John Canlas",
        SpecialNote:
            "My love for you grows with every passing day. Just like the sun rises without fail, my heart beats steadily for you. In a world that changes so quickly, you are my constant, my comfort, and my peace. No matter the storms or the quiet nights, I will always be by your side. Your smile lights up my darkest days, and your voice calms the chaos within me. Life moves forward, time never stops, but one thing will always remain true—my love, loyalty, and admiration for you. Stay strong, stay true to yourself, and know that you’re never alone. You are cherished beyond words, and I’ll keep reminding you of that forever. My love for you is endless. My heart is yours, completely.",
        DateCreated: "August 18, 2025",
    },
    {
        Sender: "Anonymous",
        Receiver: "John Canlas",
        SpecialNote:
            "My love for you grows with every passing day. Just like the sun rises without fail, my heart beats steadily for you. In a world that changes so quickly, you are my constant, my comfort, and my peace. No matter the storms or the quiet nights, I will always be by your side. Your smile lights up my darkest days, and your voice calms the chaos within me. Life moves forward, time never stops, but one thing will always remain true—my love, loyalty, and admiration for you. Stay strong, stay true to yourself, and know that you’re never alone. You are cherished beyond words, and I’ll keep reminding you of that forever. My love for you is endless. My heart is yours, completely.",
        DateCreated: "August 18, 2025",
    },
    {
        Sender: "Anonymous",
        Receiver: "John Canlas",
        SpecialNote:
            "My love for you grows with every passing day. Just like the sun rises without fail, my heart beats steadily for you. In a world that changes so quickly, you are my constant, my comfort, and my peace. No matter the storms or the quiet nights, I will always be by your side. Your smile lights up my darkest days, and your voice calms the chaos within me. Life moves forward, time never stops, but one thing will always remain true—my love, loyalty, and admiration for you. Stay strong, stay true to yourself, and know that you’re never alone. You are cherished beyond words, and I’ll keep reminding you of that forever. My love for you is endless. My heart is yours, completely.",
        DateCreated: "August 18, 2025",
    },
    {
        Sender: "Anonymous",
        Receiver: "John Canlas",
        SpecialNote:
            "My love for you grows with every passing day. Just like the sun rises without fail, my heart beats steadily for you. In a world that changes so quickly, you are my constant, my comfort, and my peace. No matter the storms or the quiet nights, I will always be by your side. Your smile lights up my darkest days, and your voice calms the chaos within me. Life moves forward, time never stops, but one thing will always remain true—my love, loyalty, and admiration for you. Stay strong, stay true to yourself, and know that you’re never alone. You are cherished beyond words, and I’ll keep reminding you of that forever. My love for you is endless. My heart is yours, completely.",
        DateCreated: "August 18, 2025",
    },
    {
        Sender: "Anonymous",
        Receiver: "John Canlas",
        SpecialNote:
            "My love for you grows with every passing day. Just like the sun rises without fail, my heart beats steadily for you. In a world that changes so quickly, you are my constant, my comfort, and my peace. No matter the storms or the quiet nights, I will always be by your side. Your smile lights up my darkest days, and your voice calms the chaos within me. Life moves forward, time never stops, but one thing will always remain true—my love, loyalty, and admiration for you. Stay strong, stay true to yourself, and know that you’re never alone. You are cherished beyond words, and I’ll keep reminding you of that forever. My love for you is endless. My heart is yours, completely.",
        DateCreated: "August 18, 2025",
    },
];


const Home = () => {
    return (
        <>
            {/* Greetings */}
            <main className="p-5 lg:pt-10 xl:pt-12 2xl:pt-17">
                <div className="grid grid-cols-1 text-center gap-3 lg:gap-5">
                    <h6 className="text-rose-pink font-pacifico text-[30px] sm:text-[48px] xl:text-[68px]">
                        Love Drop
                    </h6>
                    <h3 className="font-pacifico text-dark-brown text-[25px] sm:text-[35px] lg:text-[40px] xl:text-[45px]">
                        Save an unsaid feeling, or send a heartfelt message to
                        someone special
                    </h3>
                    <p className="font-poppins text-muted-gray text-[12px] font-medium sm:text-[14px] xl:px-20 2xl:px-30">
                        Share a sweet note or heartfelt message with someone
                        special — your crush, family, friends, teacher, or
                        anyone who holds a place in your heart. You can send it
                        anonymously or with your name.
                    </p>

                    <Link to="SaveMessage" className="w-fit m-auto">
                        {" "}
                        <button className="font-poppins font-semibold bg-sunset-orange m-auto px-5 py-2 text-[12px] rounded-4xl sm:text-[14px] cursor-pointer w-fit hover:bg-[#fc865b] transition delay-100 duration-100 hover:shadow-lg">
                            Send a Message{" "}
                        </button>
                    </Link>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 lg:grid-cols-3 py-7 lg:gap-5 lg:py-10 ">
                    {FeaturesData.map((e, i) => (
                        <div key={i} className="py-2">
                            <FeaturesCard
                                FeatureTitle={e.FeatureTitle}
                                FeatureDescription={e.FeatureDescription}
                            />
                        </div>
                    ))}
                </div>

                {/* Latest Post */}
                <div className="py-5">
                    <h3 className="font-pacifico text-dark-brown text-[24px] text-center mb-3 sm:text-[30px]">
                        Latest Notes
                    </h3>

                    <hr
                        style={{
                            border: "none",
                            height: "1px",
                            background:
                                "linear-gradient(to right, transparent, #FF5C8A, #FF5C8A, transparent)",
                        }}
                    />

                    {/* Latest post Carousel */}
                    <div className="mx-auto py-10 w-auto overflow-hidden flex">
                        <div className="flex animate-scroll gap-4">
                            {LatestPostData.map((e, i) => (
                                <div key={i}>
                                    <LatestPost
                                        Sender={e.Sender}
                                        Receiver={e.Receiver}
                                        SpecialNote={e.SpecialNote}
                                        DateCreated={e.DateCreated}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
