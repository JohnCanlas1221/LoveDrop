import React from 'react';
import { Link } from "react-router-dom";

const ViewNote = ({ Sender, Receiver, SpecialNote, DateCreated }) => {
    return (
        <>
            <div className="w-[300px] h-[274px] p-4 bg-white rounded-2xl shadow-md m-0 flex flex-col gap-3">
                <h3 className="font-pacifico text-rose-pink text-[14px]">
                    From: {Sender}
                </h3>
                <label className="font-pacifico text-muted-gray text-[12px]">
                    To: {Receiver}
                </label>
                <p className="font-dancing-script text-muted-gray text-justify text-[14px] overflow-hidden line-clamp-6">
                    {SpecialNote}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <h3 className="font-poppins text-muted-gray text-[12px]">
                        {DateCreated}
                    </h3>
                    <Link to="ViewMessage">
                        <button className="font-poppins bg-rose-pink px-5 py-2 text-[12px] rounded-xl font-medium hover:bg-[#fe4b7e] transition delay-100 duration-100 hover:shadow-lg cursor-pointer">
                            View Note
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ViewNote;
