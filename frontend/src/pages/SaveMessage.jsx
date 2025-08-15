import React from 'react';
import Footer from "../components/Footer.jsx";

const SaveMessage = () => {
    return (
        <>
            <main className="p-5">
                {/* No Deletion Reminder */}
                <div>
                    <div className="p-4 bg-[#FFF7D1] rounded-lg shadow-md mb-5">
                        <h1 className="text-dark-brown font-semibold font-poppins justify-between items-center text-left">
                            <span className="text-rose-pink m-auto text-center">
                                ♥
                            </span>{" "}
                            No Deletion Feature{" "}
                            <span className="text-rose-pink m-auto text-center">
                                ♥
                            </span>
                        </h1>
                        <p className="text-muted-gray font-poppins text-[12px] font-medium">
                            Once you submit, your message cannot be deleted or
                            edited. Please use respectful,kind, and appropriate
                            language.
                        </p>
                    </div>
                </div>

                {/* Drag & Drop Image File  */}
                {/* <div>

                </div> */}

                {/* Input Fields */}

                <div>
                    <div className="grid grid-cols-1 py-2">
                        <label className="text-black font-bold font-poppins text-sm">
                            From
                        </label>
                        <input
                            type="text"
                            className="px-5 py-3 rounded-xl shadow-md font-medium bg-blush font-poppins text-muted-gray text-[12px]"
                            placeholder="Your Name or Who’s it from?"
                        />
                    </div>
                    <div className="py-2">
                        <label className="text-muted-gray text-[12px] font-medium font-poppins">
                            <input
                                type="checkbox"
                                className=" bg-white text-black border-1 border-rose-pink "
                            />
                            I want to be Anonymous
                        </label>
                    </div>
                    <div className="grid grid-cols-1 py-2">
                        <label className="text-black font-bold font-poppins text-sm">
                            To
                        </label>
                        <input
                            type="text"
                            className="px-5 py-3 rounded-xl shadow-md font-medium bg-blush font-poppins text-muted-gray text-[12px]"
                            placeholder="Recipient’s Name or Who’s it for?"
                        />
                    </div>
                    <div className="grid grid-cols-1 py-2">
                        <label className="text-black font-bold font-poppins text-sm">
                            Message
                        </label>
                        <textarea
                            className="px-5 py-3 rounded-xl shadow-md font-medium bg-blush font-poppins text-muted-gray text-[12px] h-45"
                            placeholder="Your heartfelt message or Write your message here"
                        />
                        <div>
                            <label className="text-muted-gray text-[12px] font-poppins font-semibold">
                                255/255
                            </label>
                        </div>
                    </div>

                    <div className="items-center justify-center flex">
                        <button className="text-white bg-rose-pink font-poppins font-semibold text-[12px] px-5 py-2 rounded-xl">
                            Save & Share
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default SaveMessage;
