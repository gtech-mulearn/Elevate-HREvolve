import { cn } from "@/lib/utils";
import Image from "next/image";

const Speakers = () => {
  const people = [
    {
      name: "Aravind Warrier",
      position: "HR Lead at Volvo India",
    },
    {
      name: "Pratap G",
      position: "Founder, Leadership experiences",
    },
    {
      name: "Mohammed Rafi",
      position: "Founder and Chief Mentor, Magic of change",
    },
    {
      name: "Rajesh Padmanabhan",
      position: "Chief People and Culture Officerat CoreStack",
    },
    {
      name: "Biju Dominic",
      position:
        "Chief Evangelist, Fractal Analytics & Chairman, FinalMile Consulting",
    },
    {
      name: "Dedeepya Ajith John",
      position:
        "(Senior Director - South & Advisory Services, SHRM APAC & India)",
    },
    {
      name: "Suja Chandy",
      position:
        "Chief Sustainability Officer(Global) & Managing Director, India",
    },
    {
      name: "Manju",
      position: "Regional HR Head at TCS Trivandrum",
    },
    {
      name: "Leyones Abhraham",
      position: "Senior Manager HR at Infosys",
    },
    {
      name: "Dr. Jayasankar",
      position: "Director DCSMAT",
    },
    {
      name: "Anoop Ambika",
      position: "Chief Executive Officer, Kerala Startup Mission",
    },
  ];

  return (
    <section id="speakers" className="py-32 px-8 relative">
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6  font-american_Purpose text-5xl md:text-7xl max-sm:text-4xl">
          Our Expert Speakers
        </h2>
      </div>
      <svg
        width="300"
        height="580"
        viewBox="0 0 300 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 -z-10 max-sm:hidden"
      >
        <path
          d="M-275.835 333.221C-299.675 175.207 -190.905 27.786 -32.8912 3.94675C125.122 -19.8925 272.543 88.8774 296.383 246.891C320.222 404.905 211.452 552.326 53.4384 576.165C-104.575 600.004 -251.996 491.234 -275.835 333.221ZM207.383 260.318C190.959 151.458 89.3964 76.5231 -19.4639 92.9467C-128.324 109.37 -203.259 210.933 -186.836 319.793C-170.412 428.654 -68.8493 503.588 40.0111 487.165C148.871 470.741 223.806 369.179 207.383 260.318Z"
          fill="url(#paint0_linear_73_5231)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_73_5231"
            x1="170.082"
            y1="-3.18879"
            x2="147.705"
            y2="668.224"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color="#504E4D" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mt-12 md:mt-32 flex gap-12 flex-wrap justify-center items-center max-sm:gap-20">
        {people.map((person, i) => (
          <div key={i} className="relative group mb-4">
            <Image
              alt="frame"
              width={250}
              height={250}
              src={`/speakers/frame.webp`}
              className="w-full xl:w-[14vw]"
              draggable={false}
            ></Image>
            <Image
              alt="frame"
              width={500}
              height={500}
              src={`/speakers/speaker${i + 1}.webp`}
              className={cn(
                " w-[92%] absolute bottom-0 object-contain left-1/2 -translate-x-1/2 transform",
                {
                  "bottom-12": i === 0 || i === 2,
                }
              )}
              draggable={false}
            ></Image>
            <div className="absolute left-0 bottom-0 h-[5rem] p-1 gap-1 flex flex-col text-center font-thin justify-center items-center bg-gradient-to-b from-[#333333] to-black w-full rounded-sm text-white">
              <h2 className="text-xl font-bold plus-jakarta-sans">
                {person.name}
              </h2>
              <p className="text-[0.7rem] plus-jakarta-sans">
                {person.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
