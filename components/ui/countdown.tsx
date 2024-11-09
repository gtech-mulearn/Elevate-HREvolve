"use client";
import React, { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60),
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
        <div className="flex space-x-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex items-center justify-center bg-gray-800 text-white rounded-lg p-4 shadow-lg"
            >
              <NumberFlow
                value={value}
                format={{ notation: "compact" }} // Intl.NumberFormat options
                locales="en-US" // Intl.NumberFormat locales
                className="md:text-6xl text-4xl font-bold"
              />
              <span className="block mt-2 md:text-2xl text-xl text-gray-400">
                {unit}
              </span>
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
