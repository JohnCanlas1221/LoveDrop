import React from "react";
import RandomNote from "../components/RandomNote.jsx";
import LatestPost from "../components/LatestPost.jsx";
import ViewNote from "../components/ViewNote.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

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
];

const BrowseMessage = () => {
    return (
        <>
            <main className="p-5 lg:pt-10 grid grid-cols-1 lg:px-10 xl:px-15 2xl:px-20">
                <RandomNote />

                <div className="grid grid-cols-1 my-5">
                    <label className="text-black font-bold font-poppins text-sm">
                        Search Recipient
                    </label>
                    <input
                        type="text"
                        className="px-5 py-3 rounded-xl shadow-md font-medium bg-blush font-poppins text-muted-gray text-[12px] mt-1"
                        placeholder="Search by Name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3 m-auto my-3 lg:grid-cols-3 lg:gap-5 2xl:grid-cols-4 3xl:grid-cols-5">
                    {LatestPostData.map((e, i) => (
                        <div key={i}>
                            <ViewNote
                                Sender={e.Sender}
                                Receiver={e.Receiver}
                                SpecialNote={e.SpecialNote}
                                DateCreated={e.DateCreated}
                            />
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
            <Outlet />
        </>
    );
};

export default BrowseMessage;
