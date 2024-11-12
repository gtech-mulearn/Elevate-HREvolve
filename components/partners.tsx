"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div className="md:py-32 py-8 flex gap-5">
      <Marquee gradient={true} gradientColor="white" className="w-full">
        {[...Array(10)].map((_, i) => (
          <Image
            key={i}
            src={`/partners/partner${i + 1}.webp`}
            alt="partner"
            width={120}
            height={120}
            draggable={false}
            className="mr-4 object-cover"
          ></Image>
        ))}
        {[...Array(10)].map((_, i) => (
          <Image
            key={i}
            src={`/partners/partner${i + 1}.webp`}
            alt="partner"
            width={120}
            height={120}
            draggable={false}
            className="mr-4 object-cover"
          ></Image>
        ))}
        {[...Array(10)].map((_, i) => (
          <Image
            key={i}
            src={`/partners/partner${i + 1}.webp`}
            alt="partner"
            width={120}
            height={120}
            draggable={false}
            className="mr-4 object-cover"
          ></Image>
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
