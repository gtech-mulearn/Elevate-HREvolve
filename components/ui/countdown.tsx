"use client";
import React, { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full flex justify-center py-12">
      {Object.keys(timeLeft).length > 0 ? (
        <div className="flex md:space-x-4 space-x-2 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center justify-center bg-[rgba(60,60,60,1)] text-white rounded-lg md:p-4 p-2 shadow-2xl w-[5.4rem] md:w-36 shadow-[#242323]"
            >
              <NumberFlow
                value={value}
                format={{ notation: "compact" }} // Intl.NumberFormat options
                locales="en-US" // Intl.NumberFormat locales
                className="md:text-6xl text-3xl font-bold"
              />
              <span className="block md:text-2xl text-lg">{unit}</span>
            </div>
          ))}
        </div>
      ) : (
        <span className="text-2xl font-semibold text-red-600">
          Event has started!
        </span>
      )}
    </div>
  );
};

export default Countdown;
