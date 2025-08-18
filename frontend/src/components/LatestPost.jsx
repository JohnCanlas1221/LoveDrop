import React from "react";

const LatestPost = ({ Sender, Receiver, SpecialNote, DateCreated }) => {
    return (
        <>
            <div className="w-[300px] h-[274px] p-4 bg-white rounded-2xl shadow-md m-0 flex flex-col gap-3 cursor-pointer hover:bg-[#faeff2] transition delay-100 duration-200 ">
                <h3 className="font-pacifico text-rose-pink text-[14px] sm:text-[16px]">
                    From: {Sender}
                </h3>
                <label className="font-pacifico text-muted-gray text-[12px] sm:text-[14px]">
                    To: {Receiver}
                </label>
                <p className="font-dancing-script text-muted-gray text-justify text-[14px] sm:text-[16px] overflow-hidden line-clamp-6">
                    {SpecialNote}
                </p>

                <h3 className="font-poppins text-muted-gray text-[10px] mt-auto sm:text-[12px]">
                    {DateCreated}
                </h3>
            </div>
        </>
    );
};

export default LatestPost;
