import React, { use, useState } from 'react';
import Footer from "../components/Footer.jsx";

const SaveMessage = () => {
    const[inputValue, setInputValue] = useState('');
    const[error, setError] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    };

      const handleFileChange = (e) => {
          const file = e.target.files[0];
          if (file) {
              const validTypes = ["image/jpeg", "image/png"];
              if (!validTypes.includes(file.type)) {
                  setError("Only JPG and PNG images are allowed!"); // set error to show alert
                  e.target.value = ""; // reset file input
                  return;
              }
              setError(""); // clear error if valid
              console.log("Valid file:", file);
              // you can set preview or upload here
          }
      };


    return (
        <>
            <main className="py-5 md:px-15 lg:px-20 xl:px-25 2xl:px-30">
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

                {/* Input Fields */}

                <div>
                    <div className="grid grid-cols-1 py-2">
                        <label className="text-black font-bold font-poppins text-sm">
                            Upload a Picture
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-secondary bg-rose-pink w-auto rounded-xl shadow-md mt-1"
                            accept=".png,.jpg,.jpeg"
                            onChange={handleFileChange}
                        />
                        {error && (
                            <div
                                role="alert"
                                className="alert alert-warning py-1 mt-2 shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <span className="text-[12px]">{error}</span>
                            </div>
                        )}
                        <p className="font-poppins text-xs text-gray-500 mt-2">
                            Please upload a clear photo (PNG or JPG).
                        </p>
                    </div>
                    <div className="grid grid-cols-1 py-2">
                        <label className="text-black font-bold font-poppins text-sm">
                            From
                        </label>
                        <input
                            type="text"
                            className="px-5 py-3 rounded-xl shadow-md font-medium bg-blush font-poppins text-muted-gray text-[12px] mt-1"
                            placeholder="Your Name or Who’s it from?"
                        />
                    </div>
                    <div className="py-2">
                        <label className="flex items-center gap-2 text-muted-gray text-[12px] font-medium font-poppins cursor-pointer">
                            <input
                                type="checkbox"
                                className="appearance-none w-4 h-4 border border-rose-pink rounded-sm 
                 checked:bg-white checked:border-rose-pink 
                 relative 
                 checked:before:content-['✔'] checked:before:absolute 
                 checked:before:text-rose-pink checked:before:text-[10px] 
                 checked:before:top-[0px] checked:before:left-[2px]"
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
                            className="mt-1 px-5 py-3 rounded-xl shadow-md font-medium bg-blush font-poppins text-muted-gray text-[12px]"
                            placeholder="Recipient’s Name or Who’s it for?"
                        />
                    </div>
                    <div className="grid grid-cols-1 py-2">
                        <label className="text-black font-bold font-poppins text-sm">
                            Message
                        </label>
                        <textarea
                            className="mt-1 px-5 py-3 rounded-xl shadow-md font-medium bg-blush font-poppins text-muted-gray text-[12px] h-45"
                            placeholder="Your heartfelt message or Write your message here"
                            maxLength={500}
                            onChange={handleChange}
                        />
                        <div>
                            <label className="text-muted-gray text-[12px] font-poppins font-semibold">
                                {500 - inputValue.length}/500
                            </label>
                        </div>
                    </div>

                    <div className="items-center justify-center flex">
                        <button className="text-white bg-rose-pink font-poppins font-semibold text-[12px] px-5 py-2 rounded-xl hover:bg-[#fe4b7e] transition delay-100 duration-100 hover:shadow-lg">
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
