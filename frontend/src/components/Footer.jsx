import React from 'react';

const Footer = () => {
  return (
      <>
          <div
              className="bg-white shadow-md flex text-[10px] sm:text-[12px] md:text-[14px] text-dark-brown font-semibold font-poppins px-5 py-3 gap-2 items-center justify-center"
              style={{
                  boxShadow:
                      "0 -2px 6px -2px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}>
              <label>Created by John Canlas</label>
              <span className="text-rose-pink shadow-lg">♥</span>
              <label>personal.johncanlas@gmail.com</label>
          </div>
      </>
  );
}

export default Footer;
