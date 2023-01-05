import React from "react";

function Period({number, text}) {
  return (
    <div className="w-[100px] md:w-[150px] p-2 md:p-4 bg-white border border-[#5B9EA5] grid place-items-center">
      <div>
        <p className="text-[#346265] text-2xl md:text-4xl lg:text-4xl text-center font-bold font-sans">
          {number}
        </p>
        <p className="text-sm md:text-lg lg:text-2xl text-[#1A4F52] text-center mt-1 md:mt-2">{text}</p>
      </div>
    </div>
  );
}

export default Period;
