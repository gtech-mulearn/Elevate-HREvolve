import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  const partners = [
    "https://www.indiahrsummit.com/wp-content/uploads/2024/10/1250x1250-Adrenalin.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2024/04/Web-Sponsor-1250x1250-04.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2024/06/LT-Edutech-1.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2024/05/Remote-1.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2024/05/Remote-1.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2024/04/Web-Sponsor-1250x1250-1.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2024/06/Nexiara-1250x1250-1.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/12/ESDS-1250-X-1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/12/All-Sec-1250X1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/11/Vega-1250x1250-1.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/11/ekincare-1250X1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/11/Tantalum-Academy-1250-X-1250-1.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/11/Zimyo-1250X1250-1.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/12/Matrix-1250X1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/11/Harrison-1250X1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/11/PhiEDGE-1250-X-1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/10/Alpha-1250-X-1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/11/FirstMeridian-1250X1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/12/OnGrid-1250X1250.jpg",
    "https://www.indiahrsummit.com/wp-content/uploads/2023/12/Environics-1250-X-1250.jpg",
  ];
  return (
    <div className="md:py-32 py-8 flex gap-5">
      <Marquee gradient={true} gradientColor="white" className="w-full">
        {partners.map((partner) => (
          <img
            height={200}
            width={200}
            key={partner}
            src={partner}
            alt="partner"
            className=" object-contain mr-5 md:mr-10 rounded-lg"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
