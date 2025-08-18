import React from 'react';

const RandomNote = ({ Receiver, SpecialNote, DateCreated }) => {
    return (
        <>
            <div className="m-w-[500px] h-[274px] p-4 bg-[#FFF7D1] rounded-4xl shadow-md m-0 flex flex-col gap-1">
                <label className="font-pacifico text-dark-brown text-[18px]">
                    To: {Receiver} John
                </label>
                <p className="font-dancing-script text-muted-gray text-justify text-[14px] drop-shadow-xs">
                    {SpecialNote} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis laboriosam obcaecati accusamus
                    alias, dicta facilis aliquid quibusdam id voluptas debitis
                    adipisci rem? Esse facere blanditiis sequi? Placeat
                    architecto quibusdam possimus!Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Omnis laboriosam obcaecati
                    accusamus alias, dicta facilis aliquid quibusdam id voluptas
                    debitis adipisci rem? Esse facere blanditiis sequi? Placeat
                    architecto quibusdam possimus!Lorem ipsum dolor sit amet con
                </p>

                <h3 className="font-poppins text-muted-gray text-[10px] mt-auto">
                    {DateCreated} January 1, 1991
                </h3>
            </div>
        </>
    );
};

export default RandomNote;
