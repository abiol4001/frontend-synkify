import React, { useState } from "react";

const Countdown = () => {
  const [sec, setSec] = useState();
  const [min, setMin] = useState();
  const [hour, setHour] = useState();
  const [day, setDay] = useState();

  let interval;

  const countDown = () => {
    const countDate = new Date("Jan 30 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const gap = countDate - now;

      // Setting time
      const sec = 1000;
      const min = sec * 60;
      const hour = min * 60;
      const day = hour * 24;

      // Calc the remaining days, hours, mins, secs
      const remDays = Math.floor(gap / day);
      const remHours = Math.floor((gap % day) / hour);
      const remMins = Math.floor((gap % hour) / min);
      const remSecs = Math.floor((gap % min) / sec);

      if (gap < 0) {
        clearInterval(interval.current);
      } else {
        setDay(remDays);
        setHour(remHours);
        setMin(remMins);
        setSec(remSecs);
      }
    });
  };

  countDown();

  return (
    <div className="flex gap-2 md:gap-0 justify-between mx-auto my-[60px] md:w-[700px]">
      <div className="flex flex-col items-center justify-center border border-[#346265] h-[100px] w-[100px] ">
        <p className="text-[32px] font-[700] text-[#1A4F52]">{day}</p>
        <p className="text-[13px] md:text-[16px] text-[#1A4F52]">Days</p>
      </div>
      <div className="flex flex-col items-center justify-center border border-[#346265] h-[100px] w-[100px]">
        <p className="text-[32px] font-[700] text-[#1A4F52]">
          {hour && hour == 60 ? `0${hour}` : hour < 10 ? `0${hour}` : hour}
        </p>
        <p className="text-[13px] md:text-[16px] text-[#1A4F52]">Hours</p>
      </div>
      <div className="flex flex-col items-center justify-center border border-[#346265] h-[100px] w-[100px]">
        <p className="text-[32px] font-[700] text-[#1A4F52]">
          {min && min == 60 ? `0${min}` : min < 10 ? `0${min}` : min}
        </p>
        <p className="text-[13px] md:text-[16px] text-[#1A4F52]">Minutes</p>
      </div>
      <div className="flex flex-col items-center justify-center border border-[#346265] h-[100px] w-[100px]">
        <p className="text-[32px] font-[700] text-[#1A4F52]">
          {sec && sec == 60 ? `0${sec}` : sec < 10 ? `0${sec}` : sec}
        </p>
        <p className="text-[13px] md:text-[16px] text-[#1A4F52]">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
