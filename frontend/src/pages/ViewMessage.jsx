import React from 'react';
import Footer from '../components/Footer';

const ViewMessage = () => {
  return (
      <>
          <main className="p-5 sm:py-10">
              <div className="text-center grid grid-cols-1 gap-3 mt-5 sm:gap-5">
                  <h3 className="text-dark-brown font-pacifico text-2xl sm:text-3xl lg:text-[48px]">
                      Messages for JC
                  </h3>
                  <p className="font-poppins text-muted-gray text-[12px] font-semibold md:text-[16px] lg:text-[18px] lg:px-35 sm:px-10 md:px-20 ">
                      Someone has taken a moment out of their day to write this
                      just for you 💌 Open it, read it, and feel the thought
                      that went into every word.
                  </p>
              </div>

              <div className="flex items-center justify-center">
                  <img
                      src="/images/Placeholder.png"
                      //   src="/images/test.jpg"
                      //   src="/images/images.jpg"
                      alt=""
                      className="h-auto w-auto my-10 px-5 sm:px-10 md:px-20 lg:px-30 xl:px-40 2xl:px-50"
                  />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:gap-5 text-center">
                  <h3 className="text-dark-brown font-poppins text-[12px] font-semibold sm:text-[14px] md:text-[16px] lg:text-[18px] xl:">
                      Also, here's a message from the sender
                  </h3>
                  <p className="font-dancing-script text-muted-gray text-[12px] font-semibold lg:px-35 md:text-[16px] lg:text-[21px] xl:text-[23px] 2xl:text-[25px]">
                      My love for you grows with every passing day. Just like
                      the sun rises without fail, my heart beats steadily for
                      you. In a world that changes so quickly, you are my
                      constant, my comfort, and my peace. No matter the storms
                      or the quiet nights, I will always be by your side. Your
                      smile lights up my darkest days, and your voice calms the
                      chaos within me. Life moves forward, time never stops, but
                      one thing will always remain true—my love, loyalty, and
                      admiration for you. Stay strong, stay true to yourself,
                      and know that you’re never alone. You are cherished beyond
                      words, and I’ll keep reminding you of that forever. My
                      love for you is endless. My heart is yours, completely.
                  </p>
              </div>
          </main>

          <Footer />
      </>
  );
}

export default ViewMessage;
